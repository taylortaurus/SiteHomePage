import React from 'react';

const AppHeader = () => (
  <header>
    <div className = "app-link">
      <ul>
        <li>
          <a
            target = "_blank"
            href = "https://blog.taylortaurus.top/"
          >
            Blog
          </a>
        </li>
        <li>
          <a
            target = "_blank"
            href = "https://ranorex.xyz/"
          >
            Ranorex
          </a>
        </li>
      </ul>
    </div>
    <div className = "app-social">
      <ul>
        <li className = "gmail">
          <a
            target = "_blank"
            href = "mailto:taylortaurus0517@gmail.com"
          >
          </a>
        </li>
        <li className = "github">
          <a
            target = "_blank"
            href = "https://github.com/taylortaurus"
          >
          </a>
        </li>
        <li className = "juejin">
          <a
            target = "_blank"
            href = "https://juejin.im/user/59dc4e43f265da43305d6c4e">
          </a>
        </li>
        <li className = "zhihu">
          <a
            target = "_blank"
            href = "https://www.zhihu.com/people/TaylorTaurus/activities">
          </a>
        </li>
        <li className = "weibo">
          <a
            target = "_blank"
            href = "https://weibo.com/u/3381917832">
          </a>
        </li>
      </ul>
    </div>
  </header>
);

export default AppHeader;
