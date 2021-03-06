// Get a builder.
var builder = ceb().name('extended-tag');

// ## Extends and prototype

// By default the structure doesn't set an extends value.
// However, the prototype value is by default *Object.create(HTMLElement.prototype)*

// The builder's method **extends** adds the given extends value to the structure.
//
// > @param name (string) the name of the custom element
builder.extends('button');

// The builder's method **prototype** adds the given prototype value to the structure.
//
// > @param prototype (object) the prototype of the custom element
builder.prototype(Object.create(HTMLButtonElement.prototype));
