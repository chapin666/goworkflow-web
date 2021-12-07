import React from 'react';
import { LocaleProvider } from 'antd';
import { Router, Route, Switch } from 'dva/router';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import FlowList from './routes/FlowList';
import FlowCard from './routes/FlowCard';



function RouterConfig({ history }) {
  return (
    <LocaleProvider locale={zhCN}>
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={FlowList} />
          <Route path="/flow/:action/:id" component={FlowCard} />
          <Route path="/flow/:action" component={FlowCard} />
        </Switch>
      </Router>
    </LocaleProvider>
  );
}

export default RouterConfig;
