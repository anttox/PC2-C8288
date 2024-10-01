var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var UsuarioBase = /** @class */ (function () {
    function UsuarioBase(nombre, correo) {
        this.nombre = nombre;
        this.correo = correo;
    }
    // Metodo de permisos basicos
    UsuarioBase.prototype.verPermisos = function () {
        return ['Leer'];
    };
    return UsuarioBase;
}());
// Clase admin que se hereda del UsuarioBase
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin(nombre, correo) {
        return _super.call(this, nombre, correo) || this;
    }
    // Metodo adicional
    Admin.prototype.gestionarUsuarios = function () {
        return 'Se habilito la gestion de usuarios';
    };
    // Sobreescribimos
    Admin.prototype.verPermisos = function () {
        return __spreadArray(__spreadArray([], _super.prototype.verPermisos.call(this), true), ['Escribir'], false);
    };
    return Admin;
}(UsuarioBase));
// Prueba con UsuarioBase
var usuario = new UsuarioBase('Renzo', 'renzo.vilca@upch.pe');
console.log(usuario.verPermisos());
// Prueba con Admin
var admin = new Admin('Cesar', 'cesar.lara@upch.pe');
console.log(admin.verPermisos());
console.log(admin.gestionarUsuarios());
// Clase SuperAdmin que heredamos de Admin
var SuperAdmin = /** @class */ (function (_super) {
    __extends(SuperAdmin, _super);
    function SuperAdmin(nombre, correo) {
        return _super.call(this, nombre, correo) || this;
    }
    // Gestion del sistema
    SuperAdmin.prototype.gestionarSistema = function () {
        return 'Habilitada la gestion del sistema';
    };
    // Sobreescribimos verPermisos para implementar permisos super admin
    SuperAdmin.prototype.verPermisos = function () {
        return __spreadArray(__spreadArray([], _super.prototype.verPermisos.call(this), true), ['Gestionar Sistema'], false);
    };
    return SuperAdmin;
}(Admin));
// Prueba usando SuperAdmin
var superAdmin = new SuperAdmin('Matias', 'matias.rancel@upch.pe');
console.log(superAdmin.verPermisos());
console.log(superAdmin.gestionarSistema());
// Clase generica para gestiona los permisos basados en el tipo de usuario
var GestorDePermisos = /** @class */ (function (_super) {
    __extends(GestorDePermisos, _super);
    function GestorDePermisos(usuario) {
        var _this = this;
        _this.usuario = usuario;
        return _this;
    }
    // Mostramos los permisos del usuario basado en su tipo
    GestorDePermisos.prototype.mostrarPermisos = function () {
        console.log("".concat(this.usuario.nombre, " tiene estos permisos: ").concat(this.usuario.verPermisos().join(', ')));
    };
    return GestorDePermisos;
}(UsuarioBase));
// Pruebas con diferentes tipos de usuarios
var gestorAdmin = new GestorDePermisos(admin);
gestorAdmin.mostrarPermisos();
var gestorSuperAdmin = new GestorDePermisos(superAdmin);
gestorSuperAdmin.mostrarPermisos();
// Metodo en Admin utilizando prototipos
Admin.prototype.actualizarConfiguraciones = function () {
    return 'Las configuraciones han sido actualizadas';
};
// Prueba usando el nuevo metodo en admin
console.log(admin.actualizarConfiguraciones());
