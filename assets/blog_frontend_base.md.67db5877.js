import{_ as o,c as e,o as s,V as a}from"./chunks/framework.e9ed5590.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"blog/frontend/base.md","filePath":"blog/frontend/base.md"}'),l={name:"blog/frontend/base.md"},n=a(`<h2 id="原型和原型链" tabindex="-1">原型和原型链 <a class="header-anchor" href="#原型和原型链" aria-label="Permalink to &quot;原型和原型链&quot;">​</a></h2><ul><li><code>javascript</code> 是一门通过原型实现继承的语言。原型就是给其他对象提供共有属性的对象。</li><li>每个 <code>函数</code> 都有一个名为 <code>prototype</code> 的属性，它指向的是一个 <code>prototype</code>对象。</li><li>每个对象都有一个 <code>[[prototype]]</code> 的隐式引用，它指向它的原型对象，并从中继承数据和方法等，而原型对象也是对象，也会有 <code>[[prototype]]</code> 的隐式引用， 这样一层一层，最终指向 <code>null</code>，这种关系就是原型链。</li></ul><h2 id="闭包" tabindex="-1">闭包 <a class="header-anchor" href="#闭包" aria-label="Permalink to &quot;闭包&quot;">​</a></h2><ol><li>什么是 <code>闭包</code></li></ol><ul><li><code>闭包</code> 就是能够访问到其他函数内部变量的函数。</li></ul><ol start="2"><li><code>闭包</code> 的作用</li></ol><ul><li>隐藏一个变量。</li><li>延长变量的生命周期。</li></ul><h2 id="vue-生命周期" tabindex="-1">vue 生命周期 <a class="header-anchor" href="#vue-生命周期" aria-label="Permalink to &quot;vue 生命周期&quot;">​</a></h2><ul><li>生命周期之间是不会产生阻塞的，比如在 <code>created</code> 钩子函数前添加 <code>async</code>，在函数中调用异步请求，在 <code>mounted</code> 中并不一定能拿到异步请求的结果。</li><li>可以在 <code>created</code> 钩子中，在异步请求完成后使用 <code>this.$emit(xxx)</code>，然后在 <code>mounted</code> 中使用 <code>this.$on(xxx)</code> 来监听，这样一定能获取到异步请求的结果。</li></ul><h2 id="vite-和-webpack" tabindex="-1">vite 和 webpack <a class="header-anchor" href="#vite-和-webpack" aria-label="Permalink to &quot;vite 和 webpack&quot;">​</a></h2><ul><li><code>vite</code> 利用了浏览器的原生 <code>ESModlue</code> 功能，在浏览器请求相应 URL 时才提供文件，实现了根据路由的懒加载。</li><li>对比于 <code>webpack</code> 的热更新，<code>webpack</code> 会把所有改动过的模块的相关依赖全部重新编译一次。</li><li><code>vite</code> 的 <code>unbundle</code> 机制在 <code>devServer</code> 取得巨大的性能提升，但是首屏和懒加载的性能有所下降。</li></ul><h2 id="webpack-的工作流程" tabindex="-1">webpack 的工作流程 <a class="header-anchor" href="#webpack-的工作流程" aria-label="Permalink to &quot;webpack 的工作流程&quot;">​</a></h2><ul><li>从入口文件开始，递归的进行解析依赖的所有模块，每找到一个模块，都会去寻找对应的<code>loader</code> 进行转换，对模块转换完毕之后，再开始解析当前模块所依赖的模块。</li><li>这些模块会以入口为单位进行分组，一个入口和其所依赖的模块分到一个组(<code>chunk</code>)，最后 <code>webpack</code> 会将所有的 <code>chunk</code> 转换成文件进行输出。</li><li><code>webpack</code> 会在适当的时机执行 <code>plugin</code> 中定义的逻辑(事件机制)。</li></ul><h2 id="http-状态码" tabindex="-1">http 状态码 <a class="header-anchor" href="#http-状态码" aria-label="Permalink to &quot;http 状态码&quot;">​</a></h2><ul><li><p>1xx 请求已被接受，需要继续处理。</p></li><li><p>2xx 请求已成功被服务器接收。</p><ul><li>200：请求已经成功，请求所希望的响应头或数据体将随此响应返回。</li><li>201：请求成功并且服务器创建了新的资源。</li><li>202：请求以接受，但是尚未处理。</li></ul></li><li><p>3xx 代表客户端采取进一步的操作才能完成请求，这些状态码用来重定向，后续的请求地址在本次响应的 Location 域中指明。</p><ul><li>301：永久重定向。</li><li>302：临时重定向。</li><li>304：自从上次请求后，请求的网页未被修改过。</li></ul></li><li><p>4xx 表示请求错误，代表客户端可能发生了错误。</p><ul><li>401：请求要求身份验证。</li><li>403：服务器已经理解请求，但是拒绝执行它。与 <code>401</code> 响应不同的是，身份验证并不能提供任务帮助。</li><li>404：未找到资源。</li></ul></li><li><p>5xx 表示服务器在处理请求的过程中有错误或发生了异常状态。</p><ul><li>500：服务器遇到了一个未曾预料的状况，导致它无法完成对请求的处理。</li><li>503：临时的服务器维护或者过载，服务器当前无法完成对请求的处理。</li></ul></li></ul><h2 id="图形渲染管线" tabindex="-1">图形渲染管线 <a class="header-anchor" href="#图形渲染管线" aria-label="Permalink to &quot;图形渲染管线&quot;">​</a></h2><p>将一堆具有三维信息的数据点最终转换到二位屏幕空间的像素。</p><ol><li>顶点处理 将所有的顶点数据进行 <code>Model</code>, <code>View</code>, <code>Projection</code> 的变换(<code>MVP变换</code>)，最终得到二维平面的坐标信息(使用 <code>ZBuffer</code>保留深度 z 值)。</li><li>三角形处理 将所有的顶点，按照原几何信息，变成三角面，每个面由三个顶点组成，这样就得到了许许多多的三角形。</li><li>光栅化 把顶点数据转换为片元的过程，确定哪些像素在三角形内。</li><li>片元处理 确定每个像素点或者片元的颜色。(需要顶点的信息，对三角形内的点进行属性插值)(使用 <code>ZBuffer</code> 确定哪些像素点应该显示在屏幕上，哪些点被遮挡)</li><li><code>FrameBuffer</code> 的处理 将所有的像素颜色信息整合到一起，输送给显示设备加以显示</li></ol><h2 id="map" tabindex="-1">Map <a class="header-anchor" href="#map" aria-label="Permalink to &quot;Map&quot;">​</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> map1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Map</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> map2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Map</span><span style="color:#A6ACCD;">([</span></span>
<span class="line"><span style="color:#A6ACCD;">  [</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">key</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">value</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  [</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">key2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">value2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">])</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">map1</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">key</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">value</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">map1</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">key</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">map1</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">delete</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">key</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">map1</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">clear</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span></code></pre></div><ul><li>与 <code>Object</code> 只能使用 <code>数值</code>，<code>字符串</code> 不同，<code>Map</code> 能够使用任何 JS 的数据类型作为键。</li><li><code>Map</code> 实例会维护键值对的插入顺序。</li><li><code>Map</code> 实例可以提供一个 <code>迭代器</code>(<code>Iterator</code>)，可以通过 <code>entries</code> 方法(或者 <code>Symbol.iterator</code>) 取得这个迭代器。</li></ul><h2 id="weakmap" tabindex="-1">WeakMap <a class="header-anchor" href="#weakmap" aria-label="Permalink to &quot;WeakMap&quot;">​</a></h2><ul><li><code>WeakMap</code> 的键只能使 <code>Object</code> 或者 继承自 <code>Object</code> 的类型。</li><li>这些键并不属于正式的引用，不会阻止垃圾回收。</li><li>不可迭代。</li></ul><h2 id="set" tabindex="-1">Set <a class="header-anchor" href="#set" aria-label="Permalink to &quot;Set&quot;">​</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">cosnt set </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Set</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">set</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">add</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">set</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">has</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">set</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">delete</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Set</span><span style="color:#A6ACCD;">([</span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">array]) </span><span style="color:#676E95;font-style:italic;">//用于数组去重</span></span></code></pre></div><ul><li><code>Set</code> 类似于数组，但是成员的值都是唯一的，可以用于数组去重。</li><li>写入 <code>Set</code> 中的数据不会自动转换类型。</li><li>在 <code>Set</code> 中相同的对象并不相等。</li><li>在 <code>Set</code> 中 <code>NaN</code> 是相等的。</li></ul><h2 id="weakset" tabindex="-1">WeakSet <a class="header-anchor" href="#weakset" aria-label="Permalink to &quot;WeakSet&quot;">​</a></h2><ul><li>与 <code>Set</code> 类似，区别在于值只能存储对象。</li><li>不能遍历，多用于存储 <code>DOM对象</code>。</li></ul><h2 id="cookie-session-token" tabindex="-1">cookie, session token <a class="header-anchor" href="#cookie-session-token" aria-label="Permalink to &quot;cookie, session token&quot;">​</a></h2><p>为了解决 <code>http</code> 无状态特性所带来的问题。</p><h3 id="cookie" tabindex="-1"><code>cookie</code> <a class="header-anchor" href="#cookie" aria-label="Permalink to &quot;\`cookie\`&quot;">​</a></h3><ul><li>是文本数据，形式上是键值对。键值对之间用分号隔开。</li><li>存储在浏览器。</li><li>通过 <code>document.cookie</code> 可以设置和访问。</li><li>缺点： 1. 大小被限制在 4K 以内，所以无法保存过多的信息。 2. 容易被劫持和伪造。 3. 会加大传输压力。</li></ul><h3 id="session" tabindex="-1"><code>session</code> <a class="header-anchor" href="#session" aria-label="Permalink to &quot;\`session\`&quot;">​</a></h3><ul><li>是服务器为了保存用户状态而创建的一个特殊对象。</li><li>当客户端于服务端第一次建立连接后 ，服务端会创建一个 <code>session</code> 对象。此对象有一个 <code>sessionId</code>，客户端保存这个 <code>sessionId</code> , 在之后的通信中带上这个 <code>sessionId</code> , 服务器通过 <code>sessionId</code> 就可以找到对应的 <code>session</code> , 就可以对客户端进行身份识别并获取一些会话记录！</li><li><code>session</code> 基本上依赖于 <code>cookie</code>。</li><li>缺点： 1. 当一个服务的业务越来越大，无论是分布式还是集群，都可能有这样一个问题：就是 <code>session</code> 可能在服务器 A 中创建 ， 但是下一个请求，可能访问了服务器 B 。 但是服务器 B 没有这个 <code>session</code> , 也就是对服务器 B 来说 ，此时的请求，它是不认识的！</li></ul><h3 id="token" tabindex="-1"><code>token</code> <a class="header-anchor" href="#token" aria-label="Permalink to &quot;\`token\`&quot;">​</a></h3><ul><li>用户登录后，服务器颁发给客户端一个令牌。该令牌保存了用户的基本信息和签名等，经过加密后才会发给浏览器。</li><li>完全由应用所管理，所以能避开 <code>同源策略</code>。</li><li>可以避免 <code>CSRF</code> 攻击。</li><li>能在多个服务器间共享。</li></ul>`,36),c=[n];function p(t,i,d,r,D,y){return s(),e("div",null,c)}const F=o(l,[["render",p]]);export{u as __pageData,F as default};