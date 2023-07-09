import { createApp, defineComponent, reactive } from "vue";
import './style.css'

const Dialog = defineComponent({
  props: {
    text: String,
  },
  emits: ["onOk"],
  setup(props, ctx) {
    const { emit } = ctx;
    const state = reactive({ count: 0 });
    const onOk = () => {
      emit("onOk", state.count);
    };

    return () => (
      <div class="v-dialog-mask">
        <div class="v-dialog">
          <div class="v-dialog-text">{props.text}</div>
          <div class="v-dialog-footer">
            <button class="v-dialog-btn" onClick={onOk}>
              确定
            </button>
          </div>
        </div>
      </div>
    );
  },
});

interface CreateDialogParams {
  text: string;
  onOk: (count: number) => void;
}

export function createDialog(params: CreateDialogParams = { text: '', onOk: () => {}}) {
  const dom = document.createElement('div');
  const body = document.querySelector('body');
  body?.appendChild(dom)

  const app = createApp(Dialog, {
    text: params.text,
    onOnOk: params.onOk
  })
  app.mount(dom)

  return {
    close: () => {
      app.unmount();
      dom.remove();
    }
  }
}
