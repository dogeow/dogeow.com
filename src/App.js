import React, { useEffect } from "react";
import Header from "./layouts/Header";
import Main from "./layouts/Main";
import Footer from "./layouts/Footer";
import useScript from "./components/useScript";

export default () => {
  const [info, setInfo] = React.useState({
    doings: [],
    links: [],
  });

  useEffect(() => {
    fetch("https://api.dogeow.com/about-me/others")
      .then((res) => res.json())
      .then((data) => {
        setInfo(data);
      });
  }, []);

  return (
    <>
      <div
        id="app"
        className="min-w-screen min-h-screen flex flex-col justify-between bg-random bg-cover bg-center transition-opacity duration-700 text-sm text-gray-200"
      >
        <Header />
        <Main doings={info.doings} />
        <Footer links={info.links} />
      </div>
      <script>
        var LHC_API = LHC_API||{};
        LHC_API.args = {mode:'widget',lhc_base_url:'//live.dogeow.com/index.php/',wheight:450,wwidth:350,pheight:520,pwidth:500,domain:'dogeow.com',leaveamessage:true,check_messages:false,lang:'chn/'};
        (function() {
          var po = document.createElement('script'); po.type = 'text/javascript'; po.setAttribute('crossorigin','anonymous'); po.async = true;
          var date = new Date();po.src = '//live.dogeow.com/design/defaulttheme/js/widgetv2/index.js?'+(""+date.getFullYear() + date.getMonth() + date.getDate());
          var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
        })();
      </script>
    </>
  );
};
