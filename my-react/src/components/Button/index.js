import React from "react";
import "./button.css"

/**
 * 自定义封装--Button组件
 * @param props 组件属性
 * @returns {*}
 * @constructor
 */
export default function Button(props) {
    // 按钮大小
    const size = props.size ? props.size: 'small';
    // 按钮类型
    const type = props.type ? props.type: 'main';
    // 是否禁用
    const disabled = props.disabled ? 'disabled': '';
    // 点击事件
    const onClick = () => {
        if (props.onClick) return props.onClick();
        return new Error('按钮未绑定点击事件！');
    };

    // 拼接样式
    const cls = ["my-button", size, type, disabled];

    return (
        <button
            className={cls.join(' ')}
            disabled={disabled}
            onClick={onClick}
        >
            {props.label}
        </button>
    )
}
