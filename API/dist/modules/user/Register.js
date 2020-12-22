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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterResolver = void 0;
var type_graphql_1 = require("type-graphql");
var bcryptjs_1 = __importDefault(require("bcryptjs"));
var User_1 = require("../../entity/User");
var RegisterArgs = (function () {
    function RegisterArgs() {
    }
    __decorate([
        type_graphql_1.Field(),
        __metadata("design:type", String)
    ], RegisterArgs.prototype, "firstName", void 0);
    __decorate([
        type_graphql_1.Field(),
        __metadata("design:type", String)
    ], RegisterArgs.prototype, "lastName", void 0);
    __decorate([
        type_graphql_1.Field(),
        __metadata("design:type", String)
    ], RegisterArgs.prototype, "email", void 0);
    __decorate([
        type_graphql_1.Field(),
        __metadata("design:type", String)
    ], RegisterArgs.prototype, "username", void 0);
    __decorate([
        type_graphql_1.Field(),
        __metadata("design:type", String)
    ], RegisterArgs.prototype, "password", void 0);
    RegisterArgs = __decorate([
        type_graphql_1.ArgsType()
    ], RegisterArgs);
    return RegisterArgs;
}());
var RegisterResolver = (function () {
    function RegisterResolver() {
    }
    RegisterResolver.prototype.hello = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, "Hello World!"];
            });
        });
    };
    RegisterResolver.prototype.fullName = function (parent) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, parent.firstName + " " + parent.lastName];
            });
        });
    };
    RegisterResolver.prototype.register = function (_a) {
        var firstName = _a.firstName, lastName = _a.lastName, email = _a.email, username = _a.username, password = _a.password;
        return __awaiter(this, void 0, void 0, function () {
            var hashedPassword, user;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4, bcryptjs_1.default.hash(password, 12)];
                    case 1:
                        hashedPassword = _b.sent();
                        return [4, User_1.User.create({
                                firstName: firstName,
                                lastName: lastName,
                                email: email,
                                username: username,
                                password: hashedPassword,
                            }).save()];
                    case 2:
                        user = _b.sent();
                        return [2, user];
                }
            });
        });
    };
    __decorate([
        type_graphql_1.Query(function () { return String; }, {}),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], RegisterResolver.prototype, "hello", null);
    __decorate([
        type_graphql_1.FieldResolver(),
        __param(0, type_graphql_1.Root()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [User_1.User]),
        __metadata("design:returntype", Promise)
    ], RegisterResolver.prototype, "fullName", null);
    __decorate([
        type_graphql_1.Mutation(function () { return User_1.User; }),
        __param(0, type_graphql_1.Args()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [RegisterArgs]),
        __metadata("design:returntype", Promise)
    ], RegisterResolver.prototype, "register", null);
    RegisterResolver = __decorate([
        type_graphql_1.Resolver(User_1.User)
    ], RegisterResolver);
    return RegisterResolver;
}());
exports.RegisterResolver = RegisterResolver;
//# sourceMappingURL=Register.js.map