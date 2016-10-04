macro 💎 = function (ctx) {
  let ident = ctx.next().value;
  ctx.next(); // eat `=`
  let init = ctx.expand('expr').value;
  return #`const ${ident} = ${init}`;
}

💎 Droid = 'BB-8';
