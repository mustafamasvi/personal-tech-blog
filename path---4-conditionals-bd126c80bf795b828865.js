webpackJsonp([0xfa85d60e9718],{725:function(e,t){e.exports={data:{post:{id:"D:/learn/Projects/blog/techBlog/content/posts/2019-04-08--4-conditionals/index.md absPath of file >>> MarkdownRemark",html:'<p>In your code, you sometimes have to make decisions. Based on whether a certain condition is true or not, we can control whether certain blocks of code get executed. There are several ways of making such decisions. </p>\n<hr>\n<h2>If-else statements</h2>\n<p>The syntax of an if-else statements consists of at least two parts: if the condition between the parentheses returns true, the code after the “if” statement will be executed. However, if it returned false, the code in the “else” statement will be executed. </p>\n<div class="gatsby-highlight" data-language="javascript">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">const</span> number <span class="token operator">=</span> <span class="token number">20</span>\n<span class="token keyword">if</span><span class="token punctuation">(</span>number <span class="token operator">===</span> <span class="token number">20</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token string">\'The number is 20\'</span>\n<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token string">\'The number is not 20\'</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>If you want more conditions to be taken into consideration, you can also add many “else if”s.</p>\n<div class="gatsby-highlight" data-language="javascript">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">const</span> number <span class="token operator">=</span> <span class="token number">20</span>\n\n<span class="token keyword">if</span><span class="token punctuation">(</span>number <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token string">\'The number is smaller than 10\'</span>\n<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>number <span class="token operator">>=</span><span class="token number">10</span> <span class="token operator">&amp;&amp;</span> number <span class="token operator">&lt;</span> <span class="token number">20</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token string">\'The number is greater than or equal to 10 but smaller than 20\'</span>\n<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span> number <span class="token operator">>=</span><span class="token number">20</span> <span class="token operator">&amp;&amp;</span> number <span class="token operator">&lt;</span> <span class="token number">50</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token string">\'The number is greater than or equal to 20 but smaller than 50\'</span>\n<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token string">\'I give up. All I know is that it\\\'s not smaller than 50\'</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>In our case, JavaScript first checks if <strong>number &#x3C; 10</strong> returns <strong>true</strong>. This is not the case, and it goes to the next one <strong>number >= 10 &#x26;&#x26; number &#x3C; 20</strong>. This also returns <strong>false</strong>, as <strong>number &#x3C; 20</strong> returns <strong>false</strong>, and with the &#x26;&#x26; operator both values need to be truthy. It goes to the next one, which is <strong>number >= 20 &#x26;&#x26; number &#x3C; 50</strong> which returns <strong>true</strong>! The code block gets run, and we will get “The number is greater than or equal to 20 but smaller than 50” returned.</p>\n<hr>\n<h2>Conditional operator</h2>\n<p>There are shorter ways to write similar logic to an if-else statements, namely with conditional operators. </p>\n<div class="gatsby-highlight" data-language="javascript">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">const</span> age <span class="token operator">=</span> <span class="token number">20</span>\n<span class="token keyword">const</span> status <span class="token operator">=</span> <span class="token punctuation">(</span>age <span class="token operator">&lt;</span> <span class="token number">18</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token string">\'child\'</span> <span class="token punctuation">:</span> <span class="token string">\'adult\'</span></code></pre>\n      </div>\n<p>We can check whether a person is a child or an adult based on their age. If they’re younger than 18 years old, they’re a child. Else, they’re an adult. If the condition <strong>age &#x3C; 18</strong> returns <strong>true</strong>, the first option will get returned, which in this case is <strong>‘child’</strong>. Else, if the condition returns <strong>false</strong>, the second option will get returned, which is <strong>‘adult’</strong>. In this case, <strong>age &#x3C; 18</strong> returns false as 20 is bigger than 18, so the variable <strong>status</strong> will get the value of <strong>‘adult’</strong>.</p>\n<hr>\n<h2>Switch statements</h2>\n<p>It can be that you would get many “else” statements, which can be quite ugly. In that case, you can use switch statements instead! The syntax of a switch statement is quite different:</p>\n<p>A switch statement receives an expression as argument. Different blocks of code can get returned, based on the value of that expression. </p>\n<div class="gatsby-highlight" data-language="javascript">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">const</span> age <span class="token operator">=</span> <span class="token number">20</span>\n\n<span class="token keyword">switch</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">case</span> <span class="token number">20</span><span class="token punctuation">:</span> \n        <span class="token keyword">return</span> <span class="token string">\'You are twenty!\'</span>\n        <span class="token keyword">break</span><span class="token punctuation">;</span>\n    <span class="token keyword">case</span> <span class="token number">21</span><span class="token punctuation">:</span>\n        <span class="token keyword">return</span> <span class="token string">\'You are not twenty!\'</span>\n        <span class="token keyword">break</span><span class="token punctuation">;</span>\n    <span class="token keyword">default</span><span class="token punctuation">:</span>\n        <span class="token keyword">return</span> <span class="token string">\'Neither 20 nor 21\'</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>In case the variable age is equal to 20, ‘You are twenty’ gets returned. If age is equal to 21, ‘You are not twenty’ will be returned. If it’s neither 20 nor 21, the default code block gets executed. There are a couple of things to keep in mind here:</p>\n<ul>\n<li>Parentheses after break are necessary!</li>\n<li>There is no break at the default code block</li>\n<li>Don’t use switch cases if you need comparisons!</li>\n</ul>\n<p>The last point is quite important. This example shows the <strong>WRONG</strong> usage:</p>\n<div class="gatsby-highlight" data-language="javascript">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token comment">// THIS IS WRONG</span>\n<span class="token keyword">switch</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">case</span> <span class="token punctuation">(</span>age <span class="token operator">&lt;</span> <span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">:</span>\n        <span class="token keyword">return</span> <span class="token string">\'child\'</span>\n        <span class="token keyword">break</span><span class="token punctuation">;</span>\n    <span class="token keyword">case</span> <span class="token punctuation">(</span>age <span class="token operator">>=</span> <span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">:</span>\n        <span class="token keyword">return</span> <span class="token string">\'adult\'</span>\n        <span class="token keyword">break</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>',htmlAst:{type:"root",children:[{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"In your code, you sometimes have to make decisions. Based on whether a certain condition is true or not, we can control whether certain blocks of code get executed. There are several ways of making such decisions. "}]},{type:"text",value:"\n"},{type:"element",tagName:"hr",properties:{},children:[]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"If-else statements"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"The syntax of an if-else statements consists of at least two parts: if the condition between the parentheses returns true, the code after the “if” statement will be executed. However, if it returned false, the code in the “else” statement will be executed. "}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"javascript"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-javascript"]},children:[{type:"element",tagName:"code",properties:{className:["language-javascript"]},children:[{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"const"}]},{type:"text",value:" number "},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"="}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","number"]},children:[{type:"text",value:"20"}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"if"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"text",value:"number "},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"==="}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","number"]},children:[{type:"text",value:"20"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"{"}]},{type:"text",value:"\n    "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"return"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:"'The number is 20'"}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"}"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"else"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"{"}]},{type:"text",value:"\n    "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"return"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:"'The number is not 20'"}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"}"}]}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"If you want more conditions to be taken into consideration, you can also add many “else if”s."}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"javascript"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-javascript"]},children:[{type:"element",tagName:"code",properties:{className:["language-javascript"]},children:[{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"const"}]},{type:"text",value:" number "},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"="}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","number"]},children:[{type:"text",value:"20"}]},{type:"text",value:"\n\n"},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"if"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"text",value:"number "},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"<"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","number"]},children:[{type:"text",value:"10"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"{"}]},{type:"text",value:"\n    "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"return"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:"'The number is smaller than 10'"}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"}"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"else"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"if"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"text",value:"number "},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:">="}]},{type:"element",tagName:"span",properties:{className:["token","number"]},children:[{type:"text",value:"10"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"&&"}]},{type:"text",value:" number "},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"<"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","number"]},children:[{type:"text",value:"20"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"{"}]},{type:"text",value:"\n    "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"return"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:"'The number is greater than or equal to 10 but smaller than 20'"}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"}"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"else"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"if"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"text",value:" number "},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:">="}]},{type:"element",tagName:"span",properties:{className:["token","number"]},children:[{type:"text",value:"20"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"&&"}]},{type:"text",value:" number "},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"<"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","number"]},children:[{type:"text",value:"50"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"{"}]},{type:"text",value:"\n    "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"return"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:"'The number is greater than or equal to 20 but smaller than 50'"}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"}"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"else"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"{"}]},{type:"text",value:"\n    "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"return"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:"'I give up. All I know is that it\\'s not smaller than 50'"}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"}"}]}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"In our case, JavaScript first checks if "},{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"number < 10"}]},{type:"text",value:" returns "},{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"true"}]},{type:"text",value:". This is not the case, and it goes to the next one "},{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"number >= 10 && number < 20"}]},{type:"text",value:". This also returns "},{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"false"}]},{type:"text",value:", as "},{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"number < 20"}]},{type:"text",value:" returns "},{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"false"}]},{type:"text",value:", and with the && operator both values need to be truthy. It goes to the next one, which is "},{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"number >= 20 && number < 50"}]},{type:"text",value:" which returns "},{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"true"}]},{type:"text",value:"! The code block gets run, and we will get “The number is greater than or equal to 20 but smaller than 50” returned."}]},{type:"text",value:"\n"},{type:"element",tagName:"hr",properties:{},children:[]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Conditional operator"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"There are shorter ways to write similar logic to an if-else statements, namely with conditional operators. "}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"javascript"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-javascript"]},children:[{type:"element",tagName:"code",properties:{className:["language-javascript"]},children:[{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"const"}]},{type:"text",value:" age "},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"="}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","number"]},children:[{type:"text",value:"20"}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"const"}]},{type:"text",value:" status "},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"="}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"text",value:"age "},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"<"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","number"]},children:[{type:"text",value:"18"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"?"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:"'child'"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:":"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:"'adult'"}]}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"We can check whether a person is a child or an adult based on their age. If they’re younger than 18 years old, they’re a child. Else, they’re an adult. If the condition "},{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"age < 18"}]},{type:"text",value:" returns "},{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"true"}]},{type:"text",value:", the first option will get returned, which in this case is "},{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"‘child’"}]},{type:"text",value:". Else, if the condition returns "},{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"false"}]},{type:"text",value:", the second option will get returned, which is "},{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"‘adult’"}]},{type:"text",value:". In this case, "},{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"age < 18"}]},{type:"text",value:" returns false as 20 is bigger than 18, so the variable "},{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"status"}]},{type:"text",value:" will get the value of "},{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"‘adult’"}]},{type:"text",value:"."}]},{type:"text",value:"\n"},{type:"element",tagName:"hr",properties:{},children:[]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Switch statements"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"It can be that you would get many “else” statements, which can be quite ugly. In that case, you can use switch statements instead! The syntax of a switch statement is quite different:"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"A switch statement receives an expression as argument. Different blocks of code can get returned, based on the value of that expression. "}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"javascript"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-javascript"]},children:[{type:"element",tagName:"code",properties:{className:["language-javascript"]},children:[{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"const"}]},{type:"text",value:" age "},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"="}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","number"]},children:[{type:"text",value:"20"}]},{type:"text",value:"\n\n"},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"switch"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"text",value:"age"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"{"}]},{type:"text",value:"\n    "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"case"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","number"]},children:[{type:"text",value:"20"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:":"}]},{type:"text",value:" \n        "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"return"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:"'You are twenty!'"}]},{type:"text",value:"\n        "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"break"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:";"}]},{type:"text",value:"\n    "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"case"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","number"]},children:[{type:"text",value:"21"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:":"}]},{type:"text",value:"\n        "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"return"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:"'You are not twenty!'"}]},{type:"text",value:"\n        "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"break"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:";"}]},{type:"text",value:"\n    "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"default"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:":"}]},{type:"text",value:"\n        "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"return"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:"'Neither 20 nor 21'"}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"}"}]}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"In case the variable age is equal to 20, ‘You are twenty’ gets returned. If age is equal to 21, ‘You are not twenty’ will be returned. If it’s neither 20 nor 21, the default code block gets executed. There are a couple of things to keep in mind here:"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Parentheses after break are necessary!"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"There is no break at the default code block"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Don’t use switch cases if you need comparisons!"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"The last point is quite important. This example shows the "},{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"WRONG"}]},{type:"text",value:" usage:"}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"javascript"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-javascript"]},children:[{type:"element",tagName:"code",properties:{className:["language-javascript"]},children:[{type:"element",tagName:"span",properties:{className:["token","comment"]},children:[{type:"text",value:"// THIS IS WRONG"}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"switch"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"text",value:"age"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"{"}]},{type:"text",value:"\n    "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"case"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},
children:[{type:"text",value:"("}]},{type:"text",value:"age "},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"<"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","number"]},children:[{type:"text",value:"18"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:":"}]},{type:"text",value:"\n        "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"return"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:"'child'"}]},{type:"text",value:"\n        "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"break"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:";"}]},{type:"text",value:"\n    "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"case"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"text",value:"age "},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:">="}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","number"]},children:[{type:"text",value:"18"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:":"}]},{type:"text",value:"\n        "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"return"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:"'adult'"}]},{type:"text",value:"\n        "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"break"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:";"}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"}"}]}]}]},{type:"text",value:"\n      "}]}],data:{quirksMode:!1}},fields:{slug:"/4-conditionals/",prefix:"2019-04-08"},frontmatter:{title:"Conditionals",subTitle:"if-esle, Conditional and switch",cover:{childImageSharp:{resize:{src:"/static/conditionals-fc16900eff4c61c414d547053c428cb8-ada8c.jpg"}}}}},author:{id:"D:/learn/Projects/blog/techBlog/content/parts/author.md absPath of file >>> MarkdownRemark",html:"<p>Mustafa Masvi</p>"},footnote:{id:"D:/learn/Projects/blog/techBlog/content/parts/footnote.md absPath of file >>> MarkdownRemark",html:'<p>Although I’ll always make content without expecting any profit, donations massively help me to continue sharing resources for free.\nIf you like my content or want to support free coding content, you can donate <a href="https://paypal.me/mustafamasvi" target="_blank">here</a> through PayPal ♥</p>'},site:{siteMetadata:{facebook:{appId:"452850748792754"}}}},pathContext:{slug:"/4-conditionals/"}}}});
//# sourceMappingURL=path---4-conditionals-bd126c80bf795b828865.js.map