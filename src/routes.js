import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/HomePage';
import AboutUs from './components/AboutUsPage';
import Entry from './containers/EntryPage';

export default (
<Route path='/' component= {App}>
<IndexRoute component={HomePage} />
<Route path = 'home' component = {HomePage} />
<Route path = 'entry' component = {Entry} />
<Route path = 'about' component = {AboutUs} />
</Route>
)
