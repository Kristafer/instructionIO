"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var ProfileComponent = (function () {
    function ProfileComponent(http) {
        this.http = http;
        this.getMe();
    }
    ProfileComponent.prototype.getMe = function () {
        var _this = this;
        this.http.get('https://localhost:44328/api/profile').map(function (res) { return (res).json(); })
            .subscribe(function (data) {
            console.log(data);
            _this.user = data;
            console.log(_this.user);
        }, function (err) { return console.log('Get me user error'); });
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    core_1.Component({
        selector: 'my-profile',
        templateUrl: '/partial/profileComponent'
    }),
    __metadata("design:paramtypes", [http_1.Http])
], ProfileComponent);
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=profile.component.js.map