/**
 * src/components/init.tsx
 * (c) 2022 Shuzhou Liu.
 * Code is served under the MIT license.
 */
import React from "react";
import { Link } from "react-router-dom";

type InitState = {
    input_method: string;
};

interface InitPage {
    state: InitState;
};

class InitPage extends React.Component {
    state: InitState = {
        input_method: "text"
    };
    constructor(props: any) {
        super(props);
    }
    input_render(): React.ReactNode {
        if (this.state.input_method == "text") {
            return (
                <div>
                    我们检测到您使用了<b>文本输入</b>模式，请输入您的背诵内容：<br />
                    我们为您提供了<b>示例</b>，您可以双击查看。
                    <div className="ui form field">
                        <textarea id="text_input"></textarea>
                    </div>
                    <div className="ui accordion" onClick={()=>{$('.ui.accordion').accordion('refresh');}}>
                        <div className="title">
                            <i className="dropdown icon"></i>
                            示例
                        </div>
                        <div className="content">
                            <p className="transition visible" style={{display: "block !important"}}>
                                舜发于畎亩之中，傅说举于版筑之间，胶鬲举于鱼盐之中，管夷吾举于士，孙叔敖举于海，百里奚举于市。故天将降大任于是人也，必先苦其心志，劳其筋骨，饿其体肤，空乏其身，行拂乱其所为，所以动心忍性，曾益其所不能。<br />
                                人恒过，然后能改；困于心，衡于虑，而后作；征于色，发于声，而后喻。入则无法家拂士，出则无敌国外患者，国恒亡。然后知生于忧患而死于安乐也。
                            </p>
                        </div>
                    </div><br />
                    <button className="ui primary button">开始背诵</button>&nbsp;&nbsp;
                    <Link to="/" className="ui button">返回</Link>
                </div>
            );
        } else {
            return (
                <div>
                    ocr
                </div>
            );
        }
    }
    render(): React.ReactNode {
        return (
            <>
                请选择输入方式：
                <select className="ui simple dropdown" id="input_method" onChange={() => this.setState({
                    input_method: document.getElementById("input_method").value
                })}>
                    <option value="">请选择……</option>
                    <option value="text">文本</option>
                    <option value="ocr">图片</option>
                </select>

                {this.input_render()}
            </>
        );
    }
}

export { InitPage };