import { defineComponent, reactive } from 'vue'

const Counter = defineComponent({
  setup() {
    const state = reactive({ count: 0})

    const increase = () => state.count++


    return () => {
      return (
        <div class="counter">
          Count: {state.count}
          <button onClick={increase}>increase </button>
        </div>
      );
    }
  }

})

export default Counter