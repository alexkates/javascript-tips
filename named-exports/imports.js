// imports.js

// import multiple named exports
import { SayHello, SayGoodBye } from './exports.js';
SayHello();
SayGoodBye();

// import and rename
import { SayHello as WhatsUp, SayGoodBye as Later } from './exports.js';
WhatsUp();
Later();

// import entire module
import * as Salutations from './exports.js';
Salutations.SayHello();
Salutations.SayGoodBye();