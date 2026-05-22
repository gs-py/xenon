import { useRef, useEffect } from "react";

/**
 * Animated WebGL shader background — concentric rings that shift through the
 * brand teal → sage palette. Renders as a fixed full-screen canvas.
 */
export function ShaderCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const gl = canvas.getContext("webgl");
    if (!gl) return;

    const vertSrc = `attribute vec2 aPosition; void main(){gl_Position=vec4(aPosition,0.,1.);}`;
    const fragSrc = `
      precision highp float;
      uniform float iTime;
      uniform vec2 iResolution;
      mat2 rot(float a){float c=cos(a),s=sin(a);return mat2(c,-s,s,c);}
      float vary(vec2 v1,vec2 v2,float str,float spd){
        return sin(dot(normalize(v1),normalize(v2))*str+iTime*spd)/100.;
      }
      vec3 circle(vec2 uv,vec2 ctr,float r,float w){
        vec2 d=ctr-uv; float l=length(d);
        l+=vary(d,vec2(0.,1.),5.,2.);
        l-=vary(d,vec2(1.,0.),5.,2.);
        return vec3(smoothstep(r-w,r,l)-smoothstep(r,r+w,l));
      }
      void main(){
        vec2 uv=gl_FragCoord.xy/iResolution.xy;
        uv.x*=1.5; uv.x-=.25;
        float mask=0.;
        float r=.35;
        vec2 c=vec2(.5);
        mask+=circle(uv,c,r,.035).r;
        mask+=circle(uv,c,r-.018,.01).r;
        mask+=circle(uv,c,r+.018,.005).r;
        vec2 v=rot(iTime)*uv;
        // Brand teal (#007982) → sage (#aebda1) palette
        vec3 fg=vec3(v.x*.1,0.47+v.y*.25,0.51-v.y*v.x*.15);
        vec3 bg=vec3(1.);
        vec3 col=mix(bg,fg,mask);
        col=mix(col,vec3(1.),circle(uv,c,r,.003).r);
        gl_FragColor=vec4(col,1.);
      }`;

    const compile = (type: number, src: string) => {
      const s = gl.createShader(type)!;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    };

    const prog = gl.createProgram()!;
    gl.attachShader(prog, compile(gl.VERTEX_SHADER, vertSrc));
    gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, fragSrc));
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW,
    );
    const aPos = gl.getAttribLocation(prog, "aPosition");
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    const iTimeLoc = gl.getUniformLocation(prog, "iTime");
    const iResLoc = gl.getUniformLocation(prog, "iResolution");

    let raf: number;
    const render = (t: number) => {
      gl.uniform1f(iTimeLoc, t * 0.001);
      gl.uniform2f(iResLoc, canvas.width, canvas.height);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      raf = requestAnimationFrame(render);
    };
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
    };
    resize();
    window.addEventListener("resize", resize);
    raf = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 block h-full w-full bg-white"
    />
  );
}
