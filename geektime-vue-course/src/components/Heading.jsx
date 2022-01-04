import { defineComponent, h } from "vue";
export default defineComponent({
  props: {
    level: {
      type: Number,
      required: true,
    }

  },
  // h 函数版本
  // setup(props, { slots }) {
  //   return () => h(
  //     'h' + props.level,
  //     {},
  //     slots.default(),
  //   )

  // }
  // jsx语法版本
  setup(props, { slots }) {
    const tag = 'h'+props.level
    return () => <tag>{slots.default()}</tag>
  }
})