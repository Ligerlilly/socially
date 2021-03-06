/// <reference path="../typings/angular2-meteor.d.ts" />

import {Component, View, NgFor, provide, CORE_DIRECTIVES} from 'angular2/angular2';

import {bootstrap} from 'angular2-meteor';

import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig, APP_BASE_HREF} from 'angular2/router';
import {PartiesList} from 'client/parties-list/parties-list';
import {PartyDetails} from 'client/party-details/party-details';
import {Service} from 'client/services/service'

@Component({
    selector: 'app'
})
@View({
    template: `
    <div class='container'>
      <router-outlet>
      </router-outlet>
    </div>`,
    directives: [ROUTER_DIRECTIVES, CORE_DIRECTIVES]
})
@RouteConfig([
  { path: '/', as: 'PartiesList', component: PartiesList },
  { path: '/party/:partyId', as: 'PartyDetails', component: PartyDetails }
])
class Socially {}

bootstrap(Socially, [Service, ROUTER_PROVIDERS, provide(APP_BASE_HREF, { useValue: '/' })]);
