/**
 * @class
 * 链表节点结构
 */
class Node {
  constructor(val, next) {
    this._val = val
    this._next = next || null
  }

  setValue(val) {
    this._val = val
  }

  getValue() {
    return this._val
  }

  setNext(next) {
    this._next = next || null
  }

  getNext() {
    return this._next
  }
}

class LinkedList {
  /**
   * @constructor
   */
  constructor() {
    this._head = null
    this._count = 0
  }

  /**
   * 在链表头部插入
   * @param {Object} val 
   */
  insertFirst(val) {
    this._head = new Node(val, this._head)
    this._count += 1
    return this._head
  }

  /**
   * 在链表尾部插入
   * @param {Object} val 
   */
  insertLast(val) {
    if(this.isEmpty()) return this.insertFirst(val)

    let current = this._head
    while(current.getNext()) {
      current = current.getNext()
    }
    current.setNext(new Node(val))
    this._count += 1
    return current.getNext()
  }

  /**
   * 在指定位置插入节点
   * @param {Object} val 
   * @param {Number} position 
   */
  insertAt(val, position = 0) {
    if(Number.isNaN(+position) || position < 0 || position > this._count) return null

    if(position === 0) {
      return this.insertFirst(val)
    }

    let current = this._head
    
    for(let i = 1; i < position; i++) {
      current = current.getNext()
    }

    current.setNext(new Node(val, current.getNext()))
    this._count += 1
    return current.getNext()
  }

  /**
   * 删除头节点
   */
  removeFirst() {
    if(this.isEmpty()) return false

    this._head = this._head.getNext()
    this._count -= 1
    return true
  }

  // TODO

  /**
   * 判断当前列表是否为空
   */
  isEmpty() {
    return this._head === null
  }
}
