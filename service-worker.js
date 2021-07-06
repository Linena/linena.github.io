/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "05c32c10aec03944034f22fdefb595e0"
  },
  {
    "url": "About/index.html",
    "revision": "f580dec7c05e7407525c6d370f06b832"
  },
  {
    "url": "assets/css/0.styles.8405cd42.css",
    "revision": "47ae4a38e751a4f0c1ff170df4e5daec"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.73c6197d.js",
    "revision": "ba6ebcd3082329db753d6ba96bf09e67"
  },
  {
    "url": "assets/js/11.e74ca1b5.js",
    "revision": "9684b83fb89d693464edbc14ff20ee6a"
  },
  {
    "url": "assets/js/12.17ff8135.js",
    "revision": "59595c5a7ed4f7523abc4a9991027937"
  },
  {
    "url": "assets/js/13.3813c857.js",
    "revision": "8d2c4bf63d07498c8304a02623d45644"
  },
  {
    "url": "assets/js/14.86e97267.js",
    "revision": "01431346d771209031ddcd75b75260a3"
  },
  {
    "url": "assets/js/15.ceec221c.js",
    "revision": "4e84d438df9f99c48847f7d8a6bbee86"
  },
  {
    "url": "assets/js/16.2d49486e.js",
    "revision": "9a6e303b2421486fed3949cf18db9751"
  },
  {
    "url": "assets/js/17.c7f5ed13.js",
    "revision": "1fefababd5744b3f3ae27050dec6b0a5"
  },
  {
    "url": "assets/js/18.249eda08.js",
    "revision": "cbd0aa479c9b272887b2c08d12c83078"
  },
  {
    "url": "assets/js/19.0601fdd9.js",
    "revision": "bd15d718dece4451d94809acd5183e03"
  },
  {
    "url": "assets/js/2.f877e14c.js",
    "revision": "3b34047e132325b9603602fa2facbfe4"
  },
  {
    "url": "assets/js/20.25b38e36.js",
    "revision": "be5bf1c34bb9549a0a31cb2304220cdd"
  },
  {
    "url": "assets/js/21.d5f04004.js",
    "revision": "bdbe24c8e5174aed4d29e2cef9d94c63"
  },
  {
    "url": "assets/js/22.8d905648.js",
    "revision": "097de28dd2f6e2358353da0c72da7cdc"
  },
  {
    "url": "assets/js/23.7fe89979.js",
    "revision": "38b98a375357b31bd63c5b27567a3c9f"
  },
  {
    "url": "assets/js/24.4c8b004c.js",
    "revision": "c594a34a10894bafb4201b79bd12731e"
  },
  {
    "url": "assets/js/25.7bd7f1e3.js",
    "revision": "2080b66523fc1d81540cf30fcc6f0a86"
  },
  {
    "url": "assets/js/26.03e7ab9b.js",
    "revision": "17a9c4ff41a3ee14a8f00d4e1933daed"
  },
  {
    "url": "assets/js/27.613ec3bb.js",
    "revision": "6ef122babdda404e88a4fb663c66c31e"
  },
  {
    "url": "assets/js/28.b3b7e898.js",
    "revision": "bee5b0e1da1cb8eec64fb33df5aa7d90"
  },
  {
    "url": "assets/js/29.480ac30c.js",
    "revision": "2534e4ca603d0ca8d76c5d9ac771aa2c"
  },
  {
    "url": "assets/js/3.a3a6b999.js",
    "revision": "ec32c96c30a794185413db857ca2df0b"
  },
  {
    "url": "assets/js/30.6ed04a7d.js",
    "revision": "80665d0a85c763942be5f13dfd935dc4"
  },
  {
    "url": "assets/js/31.3c4c6c8d.js",
    "revision": "a80cfe9f4ff46f12be41494dc576eb31"
  },
  {
    "url": "assets/js/32.4431625e.js",
    "revision": "500991af6e46dd62582e96e189a7c431"
  },
  {
    "url": "assets/js/33.6dfd9426.js",
    "revision": "2b083e369cebfa7e784d64820fee1c52"
  },
  {
    "url": "assets/js/34.016f837a.js",
    "revision": "0abac095848bfe024e2f243b1fbd7b42"
  },
  {
    "url": "assets/js/35.df655b64.js",
    "revision": "6f3c7229ac566bb140ae2084b0e9f9a4"
  },
  {
    "url": "assets/js/36.d62e9782.js",
    "revision": "5e6c95df57668e93dc9e2dd34c6a420a"
  },
  {
    "url": "assets/js/37.a2709eca.js",
    "revision": "11bd098f7b088ccc956cec2339ca947b"
  },
  {
    "url": "assets/js/38.d137b624.js",
    "revision": "edd92d3f65716d6493ac98cedc264e5a"
  },
  {
    "url": "assets/js/39.587944a8.js",
    "revision": "22b3f2700ac1965e6fee0d1174da158a"
  },
  {
    "url": "assets/js/4.66cb441f.js",
    "revision": "ff225d9256ae378cbac77d18d3ab41f9"
  },
  {
    "url": "assets/js/40.32dd9e73.js",
    "revision": "e494db8770b43277acaad3c16cc35ea8"
  },
  {
    "url": "assets/js/41.9ace173e.js",
    "revision": "1b3c7d2f2b392d8b9c52a557cca5a7cb"
  },
  {
    "url": "assets/js/42.c5247c86.js",
    "revision": "8c07457487956f77acf23cfe5ba757d7"
  },
  {
    "url": "assets/js/43.85be6e8e.js",
    "revision": "799de8b3a1ca06c62296ed0f3e3e78fc"
  },
  {
    "url": "assets/js/44.f0e813a0.js",
    "revision": "23c79eccc3e07a2a15f028c59fc06f71"
  },
  {
    "url": "assets/js/45.a76eefef.js",
    "revision": "342398895d2654df9f4e8b0203c2ba77"
  },
  {
    "url": "assets/js/46.fea0f0f1.js",
    "revision": "5017788830dae07630f984be1eb72b63"
  },
  {
    "url": "assets/js/47.fc3a6a6f.js",
    "revision": "dbda30c7e1d37217e8f0aa52e6f38417"
  },
  {
    "url": "assets/js/48.4e4b670c.js",
    "revision": "ac4475ffdd272e8e28b0b6d364e58b33"
  },
  {
    "url": "assets/js/49.536308a4.js",
    "revision": "92b5c74d8da92ab797b56871c047ed6f"
  },
  {
    "url": "assets/js/5.3efdf6a7.js",
    "revision": "9989fde5f40d3f0ed49298c9a9e318e1"
  },
  {
    "url": "assets/js/6.0fa850d7.js",
    "revision": "f4e981e95b07c5597d043ed8a7e6488e"
  },
  {
    "url": "assets/js/7.c8b88a9e.js",
    "revision": "cfadbb7590a99ea25da379370af2ee72"
  },
  {
    "url": "assets/js/8.64dc4562.js",
    "revision": "c6a2603f82115806d9e8176fee493956"
  },
  {
    "url": "assets/js/9.b6ea3010.js",
    "revision": "b12eb8a23835a1129e0fbf2699a3ea78"
  },
  {
    "url": "assets/js/app.67f09986.js",
    "revision": "3b9d4cbd0f5626c4b6623118f1196462"
  },
  {
    "url": "Code/Css.html",
    "revision": "b6bfabbf66fb89e726cbaaf5cc658987"
  },
  {
    "url": "Code/index.html",
    "revision": "94dfa1bf68b5b5bd33787b3dad60b433"
  },
  {
    "url": "Code/Javascript.html",
    "revision": "71a25c561ea347fcdf96a873d03dbd3e"
  },
  {
    "url": "Code/LaraCode.html",
    "revision": "0b0589c787e68a3bf47e404239afd26d"
  },
  {
    "url": "Code/Layui.html",
    "revision": "af4caa11df5edfb6ec01205c0b01039e"
  },
  {
    "url": "Code/Menu.html",
    "revision": "c08d7204782e5eebf6d934d030c845ed"
  },
  {
    "url": "Code/Php.html",
    "revision": "aeac865d07c9fc6cf5e1edbbb39603be"
  },
  {
    "url": "Code/RequireJs.html",
    "revision": "01fc67f813be709dd33a9d1a64b52069"
  },
  {
    "url": "Code/Swoole.html",
    "revision": "f6180b70926c0239441cbb20d251238a"
  },
  {
    "url": "Code/Thinkphp.html",
    "revision": "685673313bf96dce858d732828bb9443"
  },
  {
    "url": "Code/UniApp.html",
    "revision": "8f5d3ba6a4075485ed19c0d061373930"
  },
  {
    "url": "Code/Untitled.html",
    "revision": "d0f1a36c6f0a25eaca94eedde123744a"
  },
  {
    "url": "Code/Vue.html",
    "revision": "42f461ab40af9780e83a1990f3d6061f"
  },
  {
    "url": "Code/vueNote.html",
    "revision": "13ec232292f2e4d85ab8626d35c0a10e"
  },
  {
    "url": "Code/Wechat.html",
    "revision": "4a19796b22a7fb7615fdbc3f5d9e8861"
  },
  {
    "url": "Docker/Dockerfile.html",
    "revision": "27be791e87094d37082a88088afdfb28"
  },
  {
    "url": "Docker/elasticsearch.html",
    "revision": "654e46e4699dbb40bb9870d67c3f0b07"
  },
  {
    "url": "Docker/index.html",
    "revision": "be4434fa71603369ea9ff414650f2c5a"
  },
  {
    "url": "Docker/Minikube.html",
    "revision": "e7ecb12833e7c111ca8d117011155e4c"
  },
  {
    "url": "Guide/index.html",
    "revision": "85820c8aa50321d92e1dbdb75d6a9680"
  },
  {
    "url": "images/1.jpg",
    "revision": "7492bb8cddae799c9e3788f97cb6ac74"
  },
  {
    "url": "images/2.jpg",
    "revision": "f8df6d9c2492e4a60b3ece3f0413bdd4"
  },
  {
    "url": "images/3.jpg",
    "revision": "c74b485f9868798e7ab600f2989b7bc4"
  },
  {
    "url": "images/4.jpg",
    "revision": "cacbe6de5829c420b51093bd98c12336"
  },
  {
    "url": "images/5.jpg",
    "revision": "b1c444722ec4f181dbf010a9eeda6272"
  },
  {
    "url": "images/5d3c3159d1a49.png",
    "revision": "d0804ec4dca489cb9ba94523ed6c63a6"
  },
  {
    "url": "images/dockerimage.png",
    "revision": "aa427c927479f9e55f9063c371396d88"
  },
  {
    "url": "images/gb.jpg",
    "revision": "f182e6504d2650bf9421cae6ef309873"
  },
  {
    "url": "images/image-20201207103646644.png",
    "revision": "aa427c927479f9e55f9063c371396d88"
  },
  {
    "url": "images/image-20201215110741455.png",
    "revision": "10ba6582f96e8a63f17c51f4f3867358"
  },
  {
    "url": "images/image-20201215111505365.png",
    "revision": "2c9945071e611a13ec5948e8ffdc4fa9"
  },
  {
    "url": "images/image-20201215114012421.png",
    "revision": "f074b292a2cee0fa338243c44dad2e36"
  },
  {
    "url": "images/qq-avatar.jpg",
    "revision": "5104a9e0de46ac20f02897468e7cca0f"
  },
  {
    "url": "index.html",
    "revision": "20acbecd6d5d4c766b51ce7e6119e21c"
  },
  {
    "url": "js/cursor.min.js",
    "revision": "ac37a3a34e305fc3565ab14a6a457f7c"
  },
  {
    "url": "js/jquery-3.5.min.js",
    "revision": "b61aa6e2d68d21b3546b5b418bf0e9c3"
  },
  {
    "url": "Linux/Config.html",
    "revision": "90a96dbea83005a03d12de864854e4b7"
  },
  {
    "url": "Linux/Question.html",
    "revision": "ab6f2225ec9e82247e305b3c3b30a2bf"
  },
  {
    "url": "Linux/Tool.html",
    "revision": "0f9670b87110035b34fe699d3692348e"
  },
  {
    "url": "Live/index.html",
    "revision": "fbc7c3837f1741d9e2005a1cf07d3101"
  },
  {
    "url": "live2d/shizuku/assets/moc/shizuku.1024/texture_00.png",
    "revision": "ca0698ca5a3bf2400e5cf8a1f456a61c"
  },
  {
    "url": "live2d/shizuku/assets/moc/shizuku.1024/texture_01.png",
    "revision": "c960c28ee3f0353023d9498d2362d23c"
  },
  {
    "url": "live2d/shizuku/assets/moc/shizuku.1024/texture_02.png",
    "revision": "efb0515bcaee933f8c38e750d2c4bd3b"
  },
  {
    "url": "live2d/shizuku/assets/moc/shizuku.1024/texture_03.png",
    "revision": "f735487e72e73a0ea528975041548a14"
  },
  {
    "url": "live2d/shizuku/assets/moc/shizuku.1024/texture_04.png",
    "revision": "5b282aa9f7d4fa68cc24c946c0556b87"
  },
  {
    "url": "live2d/shizuku/assets/moc/shizuku.1024/texture_05.png",
    "revision": "16f7b74f1e61bf2b21d91ea5c3ee71de"
  },
  {
    "url": "MyNote/Es6.html",
    "revision": "d47770a6fa0d1d07cb772f8110716716"
  },
  {
    "url": "MyNote/index.html",
    "revision": "11d97498f1e8c26f6e7461a8efc0d748"
  },
  {
    "url": "MyNote/Rclone.html",
    "revision": "872775b9433e24d57d7bef1772a635f2"
  },
  {
    "url": "notes/orangbus.html",
    "revision": "998625dc803a466f3090155ebdfd0a13"
  },
  {
    "url": "orangbus.png",
    "revision": "c3b8ba46f6ddba8ca3c46b1a5865830a"
  },
  {
    "url": "OrangBus/index.html",
    "revision": "15886443d1e36ff582780595d6ddba8f"
  },
  {
    "url": "OrangBus/OneWords.html",
    "revision": "20e10daa2c376b2a31f0bb028bff1840"
  },
  {
    "url": "Python/Python.html",
    "revision": "27dee4b514c372494ee148c2fa7ad2c5"
  },
  {
    "url": "Python/Scrapy.html",
    "revision": "6728c90141bdfc48c165997dde64432c"
  },
  {
    "url": "tempNote.html",
    "revision": "85812a29f7ffe59b6664399abc5622e1"
  },
  {
    "url": "WebNote/打包压缩命令.html",
    "revision": "bb88e45f5d838089a7c5ce1c617fdfef"
  },
  {
    "url": "WebNote/如何快速清理 docker 资源.html",
    "revision": "9429829f700b9ca3367cbdeeaf4e81ce"
  },
  {
    "url": "WebNote/十个催泪虐心的小故事.html",
    "revision": "421ce1594aab0e80335a7d48a3b10ad0"
  },
  {
    "url": "WebNote/Git 配置多个 SSH-Key.html",
    "revision": "849268ef35ece915667769a4ddce64bc"
  },
  {
    "url": "WebNote/Git webhook 实现自动部署教程.html",
    "revision": "35be64b5619d23ebe5d54b6e3c0748d2"
  },
  {
    "url": "WebNote/index.html",
    "revision": "3634d836ed9ac90468d747ec4e2fe7f9"
  },
  {
    "url": "WebNote/php中call_user_func 与 call_user_func_array的使用 .html",
    "revision": "2b2e3b75b77ec1f2e416fe91f5b6fdea"
  },
  {
    "url": "WebNote/UserAgent.html",
    "revision": "e816acc7b19f5f4812e2facd27fd96dd"
  },
  {
    "url": "Window/index.html",
    "revision": "8da400c02e03ca9ea08b546a19d84d62"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
