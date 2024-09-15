/**
 * @Author: ZRM
 * @Date: 2024-09
 * @LastEditors: ZRM
 * @LastEditTime: 2024-09
 * @Description: tsx 基础语法
*/
const TsxBasicGrammar = () => {
    // 使用 tsx 绑定变量
    const num = 333

    const fn = () => 'test'

    // 绑定 class 需要用 className
    const value = 'A'

    // 绑定多个 class
    const a = 'A'

    // 绑定样式 style
    const styles = { color: 'red' }

    // 绑定事件
    const clickTap = (params: string) => console.log(params)

    // 使用泛型
    const valueForGeneric = '小满'
    const clickTapWithGeneric = <T,>(params: T) => console.log(params)

    // 渲染 html 代码片段（dangerouslySetInnerHTML）
    const htmlValue = '<section style="color:blue">小满</section>'

    // 遍历 dom 元素
    const arr = ["小满", "中满", "大满"]

    // 编写条件语句
    const flag = true

    return (
        <>
            <>{num}</>
            <>{fn()}</>
            <>{new Date().getTime()}</>
            <div data-index={value} className={value} id={value}>{value}</div>
            <div className={`${a} class2`}>{value}</div>
            <div style={styles}>test</div>
            <div onClick={() => clickTap(value)}>{value}</div>
            <div onClick={() => clickTapWithGeneric(valueForGeneric)}>{valueForGeneric}</div>
            <div dangerouslySetInnerHTML={{ __html: htmlValue }}></div>
            {
                arr.map((item) => {
                    return <div>{item}</div>
                })
            }
            {
                flag? <div>真的</div> : <div>假的</div>
            }
        </>
    )
}

export default TsxBasicGrammar