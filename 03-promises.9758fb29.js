!function(){var n={form:document.querySelector(".form")};n.form.addEventListener("input",(function(n){o[n.target.name]=+n.target.value})),n.form.addEventListener("submit",(function(n){n.preventDefault();for(var e=o.delay,i=o.step,a=o.amount,r=e,c=1;c<=a;c++)t(c,r).then((function(n){var o=n.position,t=n.delay;console.log("✅ Fulfilled promise ".concat(o," in ").concat(t,"ms"))})).catch((function(n){var o=n.position,t=n.delay;console.log("❌ Rejected promise ".concat(o," in ").concat(t,"ms"))})),r+=i}));var o={};function t(n,o){var t=Math.random()>.5;return new Promise((function(e,i){setTimeout((function(){t?e({position:n,delay:o}):i({position:n,delay:o})}),o)}))}}();
//# sourceMappingURL=03-promises.9758fb29.js.map
