/**
 * @class
 * JavaScript 实现 先进先出 队列
 */
class Queue {
  /**
   * @constructor
   * @param {Array} elements 
   */
  constructor(elements){
    this._elements = Array.isArray(elements) ? elements : []
  }

  /**
   * @public
   * 向队尾添加元素
   * @param {Object} element
   */
  enqueue(element) {
    this._elements.push(element)
  }

  /**
   * @public
   * 取出队头元素
   */
  dequeue() {
    if(this.size() === 0) return null
    return this._elements.shift()
  }

  /**
   * @public
   * 获取队列的大小
   */
  size() {
    return this._elements.length
  }

  /**
   * @public
   * 返回队头元素，但不删除
   */
  front() {
    return this._elements[0] ? this._elements[0] : null
  }

  /**
   * @public
   * 返回队尾元素
   */
  back() {
    if(this.size() === 0) return null
    return this._elements[this._elements.length - 1]
  }

  /**
   * @public
   * 判断队列是否为空
   */
  isEmpty() {
    return this.size() === 0
  }

  /**
   * @public
   * 清空队列
   */
  clear() {
    this._elements = []
  }

  /**
   * @public
   * 克隆一个队列
   */
  clone() {
    return new Queue(this._elements.slice(0))
  }

  /**
   * @public
   * 将队列转换为数组
   */
  toArray() {
    return this._elements.slice(0)
  }

  /**
   * @public
   * @static
   * 将数组转换为队列
   * @param {Array} arr 
   */
  static fromArray(arr) {
    return new Queue(arr)
  }
}

export default Queue
