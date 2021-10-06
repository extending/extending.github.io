import { m as defineComponent, a as createVNode, b as createTextVNode } from "./vendor.da53e6f3.js";
var foo = "";
const Foo = defineComponent({
  name: "foo",
  setup() {
    return () => createVNode("div", {
      "class": "jsx"
    }, [createTextVNode("from JSX")]);
  }
});
export { Foo };
