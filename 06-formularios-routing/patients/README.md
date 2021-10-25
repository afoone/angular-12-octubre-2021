# Formularios en Angular:

- **FormControl** - encapsula los inputs de las forms
- **Validators** - validan las entradas
- **Observers** nos permiten estar atentos a los cambios en el formulario para responder

# FormControls y FormGroups

**FormControl** representa un input concreto- es la unidad más pequeña en un formulario, encapsula el valor del input y los estados como si es *valid* o *dirty* (ha sido modificado), o si tiene errores

```typescript
let nameControl = new FormControl("alfonso")
let name = nameControl.value // alfonso
nameControl.errors //StringMap, de errores
nameControl.dirty // si ha sido modificado
nameControl.valid // si es válido
```

```html
<input type="text" [formControl]="name">
```

**FormGroup** una interfaz para una colección de *FormControl*, nos permite agruparlos, validarlos en conjunto, etc.

```typescript
let patientInfo = new FormGroup( {
  name: new FormControl('alfonso'),
  surname: new FormControl('tienda')
})

patientInfo.value;
// {name: 'alfonso', surname: 'tienda'}
patientInfo.dirty // si algún control se ha modificado
patientInfo.valid // si el formulario es correcto
patientInfo.errors // errores del formulario
```

``
