/**
 * @class
 * 双向链表
 */
export class DoublyLinkedListNode {
  /**
   * @constructor
   * @param {Object} val 
   * @param {DoublyLinkedListNode} prev 
   * @param {DoublyLinkedListNode} next 
   */
  constructor(val, prev, next) {
    this._val = val
    this._prev = prev || null
    this._next = next || null
  }

  /**
   * @public
   * @param {Object} val 
   */
  setValue(val) {
    this._val = val
  }

  /**
   * @public
   * @returns {Object}
   */
  getValue() {
    return this._val
  }

  /**
   * @public
   * @param {DoublyLinkedListNode}
   */
  setNext(next) {
    this._next = next || null;
  }

  /**
   * @public
   * @returns {DoublyLinkedListNode}
   */
  getNext() {
    return this._next;
  }

  /**
   * @public
   * @param {DoublyLinkedListNode} prev
   */
  setPrev(prev) {
    this._prev = prev || null;
  }

  /**
   * @public
   * @returns {DoublyLinkedListNode}
   */
  getPrev() {
    return this._prev;
  }
}

export class DoublyLinkedList {
  /**
   * @constructor
   */
  constructor() {
    this._head = null
    this._tail = null
    this._count = 0
  
  }

  /**
   * 在头部插入
   * @param {Object} val 
   */
  insertFirst(val) {
    let node = new DoublyLinkedListNode(val)
    if(this.isEmpty()) {
      this._head = node
      this._tail = node
    } else {
      node.setNext(this._head)
      this._head.setPrev(node)
      this._head = node
    }
    this._count += 1
    return this._head
  }

  /**
   * 在末尾插入
   * @param {Object} val 
   */
  insertLast(val) {
    let node = new DoublyLinkedListNode(val)
    if(this.isEmpty()) {
      this._head = node
      this._tail = node
    } else {
      node.setPrev(this._tail)
      this._tail.setNext(node)
      this._tail = node
    }
    this._count += 1
    return this._tail
  }

  /**
   * 在指定位置插入
   * @param {Object} val 
   * @param {Number} position 
   */
  insertAt(val, position = 0) {
    if(Number.isNaN(+position) || position < 0 || position > this._count) return null

    if(position === 0) this.insertFirst(val)
    
    if(position === this._count) this.insertLast(val)

    let current = this._head
    let node = new DoublyLinkedListNode(val)

    for(let i = 1; i < position; i++) {
      current = current.getNext()
    }

    node.setNext(current.getNext())
    node.setPrev(current)
    node.getNext().setPrev(node)
    node.getPrev().setNext(node)
    this._count += 1
    
    return node

  }

  /**
   * 删除链表第一个节点
   */
  removeFirst() {
    if(this.isEmpty()) return false

    if(this.count() === 1) {
      this.clear()
      return true
    }

    this._head = this._head.getNext()
    this._head.setPrev(null)
    this._count -= 1
    return true
  }

  /**
   * 删除链表最后一个节点
   */
  removeLast() {
    if(this.isEmpty()) return false

    if(this.count() === 1) {
      this.clear()
      return true
    }

    this._tail = this._tail.getPrev()
    this._tail.setNext(null)
    this._count -= 1
    return true
  }

  /**
   * 删除指定位置的节点
   * @param {Number} position 
   */
  removeAt(position) {
    if(Number.isNaN(+position) || position < 0 || position >= this._count) return false

    if(position === 0) return this.removeFirst()
    
    if(position === this.count()) return this.removeLast()

    let current = this._head

    for(let i = 1;i < position;i++) {
      current = current.getNext()
    }
    
    current.setNext(current.getNext().getNext())
    current.getNext().setPrev(current)
    this._count -= 1
    return true
  }

  /**
   * 循环删除符合条件的节点
   * @param {Function} cb 
   */
  removeEach(cb) {
    if(typeof cb !== "function") throw new Error('.removeEach(cb) expects a callback');

    let removed = 0
    let prev = null
    let current = this._head

    while(current) {
      if(cb(current)) {
        if(current.getPrev() === null) this.removeFirst()
        else if(current.getNext() === null) this.removeLast() 
        else {
          current.getPrev().setNext(current.getNext())
          current.getNext().setPrev(current.getPrev())
          this._count -= 1
        }
        removed += 1
      }
      prev = current
      current = current.getNext()
    }

    return removed
  }

  /**
   * 正向循环链表
   * @param {Function} cb 
   */
  forEach(cb) {
    if (typeof cb !== 'function') throw new Error('.forEach(cb) expects a callback')

    let current = this._head
    while(current) {
      cb(current)
      current = current.getNext()
    }
  }

  /**
   * 反向循环链表
   * @param {Function}} cb 
   */
  forEachReverse(cb) {
    if (typeof cb !== 'function') throw new Error('.forEachReverse(cb) expects a callback');
    
    let current = this._tail
    while(current) {
      cb(current)
      current = current.getPrev()
    }
  }

  /**
   * 查询符合当前条件的节点
   * @param {Function} cb 
   */
  find(cb) {
    if (typeof cb !== 'function') throw new Error('.find(cb) expects a callback');

    let current = this._head

    while(current) {
      if(cb(current)) return current
      current = current.getNext()
    }

    return null
  }

  /**
   * 根据条件筛选出链表中符合条件的节点
   * @param {Function} cb 
   */
  filter(cb) {
    if (typeof cb !== 'function') throw new Error('.filter(cb) expects a callback')

    const result = new DoublyLinkedList()
    let current = this._head
    while(current) {
      if(cb(current)) result.insertLast(current.getValue())
      current = current.getNext()
    }

    return result
  }

  head() {
    return this._head
  }

  tail() {
    return this._tail
  }

  /**
   * 将链表转换为数组
   */
  toArray() {
    let result = []

    let current = this._head
    while(current) {
      result.push(current.getValue())
      current = current.getNext()
    }
    return result
  }

  /**
   * 获取链表中节点数量
   */
  count() {
    return this._count
  }

  /**
   * @public
   * 判断链表是否为空
   */
  isEmpty() {
    return this._head === null
  }

  /**
   * 清空链表
   */
  clear() {
    this._head = null
    this._tail = null
    this._count = 0
  }
}
