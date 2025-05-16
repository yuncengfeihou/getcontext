// metadata-verifier/index.js

// 导入 getContext 函数
// 根据你的 SillyTavern 版本和文件结构调整路径
import { getContext } from '../../../../script.js'; // 假设 script.js 在四级目录外

const PLUGIN_NAME = 'getcontext';

// 按钮点击事件处理函数
function printMetadata() {
    const context = getContext();
    if (context && context.chat_metadata) {
        console.log(`[${PLUGIN_NAME}] 当前聊天的 chat_metadata:`, context.chat_metadata);
        // 可以进一步检查是否存在 sheets 属性
        if (context.chat_metadata.sheets) {
            console.log(`[${PLUGIN_NAME}] chat_metadata 包含 sheets 属性:`, context.chat_metadata.sheets);
        } else {
            console.log(`[${PLUGIN_NAME}] chat_metadata 不包含 sheets 属性。`);
        }
        // 如果你使用了表格插件，并且表格插件已经初始化并保存了数据，这里应该能看到 sheets 属性
    } else {
        console.log(`[${PLUGIN_NAME}] 无法获取 getContext() 或 chat_metadata 对象。`, context);
    }
}

// 插件入口函数
jQuery(async () => {
    console.log(`[${PLUGIN_NAME}] 插件加载中...`);

    // 创建按钮 HTML
    const buttonHtml = `
        <button id="print_metadata_button" class="menu_button" 
                style="position: fixed; top: 10px; right: 10px; z-index: 1000;">
            打印 chat_metadata
        </button>
    `;

    // 将按钮添加到 body 中 (使用 fixed 定位方便测试)
    $('body').append(buttonHtml);

    // 为按钮绑定点击事件
    $('#print_metadata_button').on('click', printMetadata);

    console.log(`[${PLUGIN_NAME}] 插件加载完成，"打印 chat_metadata" 按钮已添加到右上角。`);
});
