import { Helmet } from "react-helmet-async";

export function Analytics() {
  const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;
  const PIXEL_ID = import.meta.env.VITE_META_PIXEL_ID;
  const LINKEDIN_PARTNER_ID = import.meta.env.VITE_LINKEDIN_PARTNER_ID;

  // Only render tracking scripts if we have the IDs (avoids errors in dev/staging)
  return (
    <Helmet>
      {/* Google Analytics 4 */}
      {GA_ID && (
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
      )}
      {GA_ID && (
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </script>
      )}

      {/* Meta Pixel */}
      {PIXEL_ID && (
        <script>
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${PIXEL_ID}');
            fbq('track', 'PageView');
          `}
        </script>
      )}

      {/* LinkedIn Insight Tag */}
      {LINKEDIN_PARTNER_ID && (
        <script>
          {`
            _linkedin_partner_id = "${LINKEDIN_PARTNER_ID}";
            window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
            window._linkedin_data_partner_ids.push(_linkedin_partner_id);
            (function(l) {
            if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
            window.lintrk.q=[]}
            var s = document.getElementsByTagName("script")[0];
            var b = document.createElement("script");
            b.type = "text/javascript";b.async = true;
            b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
            s.parentNode.insertBefore(b, s);})(window.lintrk);
          `}
        </script>
      )}
    </Helmet>
  );
}
