class UsuarioBase {
    constructor(nombre, correo) {
        this.nombre = nombre;
        this.correo = correo;
    }

    // Metodo de permisos basicos
    verPermisos() {
        return ['Leer'];
    }
}
// Clase admin que se hereda del UsuarioBase
class Admin extends UsuarioBase {
    constructor(nombre, correo) {
        super(nombre, correo);
    }
    // Metodo adicional
    gestionarUsuarios(){
        return 'Se habilito la gestion de usuarios'
    }
    // Sobreescribimos
    verPermisos(){
        return [...super.verPermisos(), 'Escribir']
    }
}

// Prueba con UsuarioBase
const usuario = new UsuarioBase('Renzo', 'renzo.vilca@upch.pe');
console.log(usuario.verPermisos()); 

// Prueba con Admin
const admin = new Admin('Cesar', 'cesar.lara@upch.pe');
console.log(admin.verPermisos()); 
console.log(admin.gestionarUsuarios()); 

// Clase SuperAdmin que heredamos de Admin
class SuperAdmin extends Admin {
    constructor(nombre, correo) {
        super(nombre, correo); 
    }

    // Gestion del sistema
    gestionarSistema() {
        return 'Habilitada la gestion del sistema';
    }

    // Sobreescribimos verPermisos para implementar permisos super admin
    verPermisos() {
        return [...super.verPermisos(), 'Gestionar Sistema'];
    }
}

// Prueba usando SuperAdmin
const superAdmin = new SuperAdmin('Matias', 'matias.rancel@upch.pe');
console.log(superAdmin.verPermisos()); 
console.log(superAdmin.gestionarSistema()); 

// Clase generica para gestiona los permisos basados en el tipo de usuario
class GestorDePermisos extends UsuarioBase {
    constructor(usuario) {
        this.usuario = usuario;
    }

    // Mostramos los permisos del usuario basado en su tipo
    mostrarPermisos() {
        console.log(`${this.usuario.nombre} tiene estos permisos: ${this.usuario.verPermisos().join(', ')}`);
    }
}

// Pruebas con diferentes tipos de usuarios
const gestorAdmin = new GestorDePermisos(admin);
gestorAdmin.mostrarPermisos(); 

const gestorSuperAdmin = new GestorDePermisos(superAdmin);
gestorSuperAdmin.mostrarPermisos(); 

// Metodo en Admin utilizando prototipos
Admin.prototype.actualizarConfiguraciones = function () {
    return 'Las configuraciones han sido actualizadas';
};

// Prueba usando el nuevo metodo en admin
console.log(admin.actualizarConfiguraciones()); 
