/**
 * @class
 * JavaScript 实现 后进先出 栈
 */

class Stack {
  /**
   * @constructor
   * @param {array} elements 
   */
  constructor(elements) {
    this._elements = Array.isArray(elements) ? elements : []
  }

  /**
   * @public
   * 判断栈是否为空
   */
  isEmpty() {
    return this._elements.length === 0
  }

  /**
   * @public
   * 获取栈的大小
   */
  size() {
    return this._elements.length
  }

  /**
   * @public
   * 查看栈顶元素
   */
  peek() {
    if(this.isEmpty()) return null

    return this._elements[this._elements.length - 1]
  }

  /**
   * @public
   * 添加元素到栈中
   * @param {any} el 
   */
  push(el) {
    this._elements.push(el)
  }

  /**
   * @public
   * 弹出栈顶元素
   */
  pop() {
    if(this.isEmpty()) return null

    return this._elements.pop()
  }

  /**
   * @public
   * 将栈转换为数组
   */
  toArray() {
    return this._elements.slice(0)
  }

  /**
   * @public
   * @static
   * @param {Array} arr 
   */
  static fromArray(arr) {
    return new Stack(arr)
  }

  /**
   * @public
   * 清空当前栈
   */
  clear() {
    this._elements = []
  }

  /**
   * @public
   * 克隆栈
   */
  clone() {
    return new Stack(this._elements.slice(0))
  }
}

export default Stack
