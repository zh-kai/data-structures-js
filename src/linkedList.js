/**
 * @class
 * 链表节点结构
 */
export class LinkedListNode {
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

/**
 * @class
 * 单向链表
 */
export class LinkedList {
  /**
   * @constructor
   */
  constructor() {
    this._head = null
    this._count = 0
  }

  /**
   * @public
   * 在链表头部插入
   * @param {Object} val 
   */
  insertFirst(val) {
    this._head = new LinkedListNode(val, this._head)
    this._count += 1
    return this._head
  }

  /**
   * @public
   * 在链表尾部插入
   * @param {Object} val 
   */
  insertLast(val) {
    if(this.isEmpty()) return this.insertFirst(val)

    let current = this._head
    while(current.getNext()) {
      current = current.getNext()
    }
    current.setNext(new LinkedListNode(val))
    this._count += 1
    return current.getNext()
  }

  /**
   * @public
   * 在指定位置插入节点
   * @param {Object} val 
   * @param {Number} position 
   */
  insertAt(val, position = 0) {
    if(Number.isNaN(+position) || position < 0 || position > this._count) return null

    if(position === 0) {
      return this.insertFirst(val)
    }

    let pre = this._head
    
    for(let i = 1; i < position; i++) {
      pre = pre.getNext()
    }

    pre.setNext(new LinkedListNode(val, pre.getNext()))
    this._count += 1
    return pre.getNext()
  }

  /**
   * @public
   * 删除头节点
   */
  removeFirst() {
    if(this.isEmpty()) return false

    this._head = this._head.getNext()
    this._count -= 1
    return true
  }

  /**
   * @public
   * 删除尾部节点
   */
  removeLast() {
    if(this.isEmpty()) return false

    if(this._count === 1) {
      this.clear()
      return true
    }

    let pre = this._head
    while(1) {
      if(!pre.getNext().getNext()) break
      pre = pre.getNext()
    }

    pre.setNext(null)
    this._count -= 1

    return true
  }

  /**
   * @public
   * 循环删除满足条件的节点
   * @param {Function} cb 
   */
  removeEach(cb) {
    if(typeof cb !== 'function') {
      throw new Error('removeEach argument expect a function')
    }

    let removed = 0
    let pre = null
    let current = this._head

    while(current instanceof LinkedListNode) {
      if(cb(current)) {
        if(pre === null) {
          this.removeFirst()
        } else {
          pre.setNext(pre.getNext().getNext())
          this._count -= 1
        }
        removed += 1
      }
      pre = current
      current = current.getNext()
    }

    return removed
  }

  /**
   * @public
   * 删除某个位置的节点
   */
  removeAt(position) {
    if (Number.isNaN(+position) || position < 0 || position >= this._count) return false;

    if(position === 0) {
      return this.removeFirst()
    }

    let pre = this._head

    for(let i = 1; i < position; i++) {
      pre = pre.getNext()
    }

    pre.setNext(pre.getNext().getNext())
    this._count -= 1
    return true
  }

  /**
   * 根据回调查询符合条件的节点
   * @param {Function} cb 
   */
  find(cb) {
    if (typeof cb !== 'function') {
      throw new Error('find argument expect a function');
    }

    if(this.isEmpty()) return null

    let current = this._head
    while(current) {
      if(cb(current)) return current
      current = current.getNext()
    }
    return null
  }

  /**
   * 遍历链表，并执行回调函数
   * @param {Function} cb 
   */
  forEach(cb) {
    if (typeof cb !== 'function') {
      throw new Error('forEach argument expect a function');
    }

    let current = this._head
    while(current) {
      cb(current)
      current = current.getNext()
    }
  }

  filter(cb) {
    if (typeof cb !== 'function') {
      throw new Error('filter argument expect a function');
    }

    let result = new LinkedList()

    this.forEach(curr => {
      if(cb(curr)) result.insertLast(curr.getValue())
    })

    return result
  }

  /**
   * @public
   * 获取头节点
   */
  head() {
    return this._head
  }

  /**
   * @public
   * 返回链表节点数量
   */
  count() {
    return this._count
  }

  /**
   * @public
   * 将列表转换为数组
   */
  toArray() {
    let result = []
    this.forEach(curr => {
      result.push(curr.getValue())
    })
    return result
  }

  /**
   * @public
   * 判断当前列表是否为空
   */
  isEmpty() {
    return this._head === null
  }

  /**
   * @public
   * 清空链表
   */
  clear() {
    this._head = null
    this._count = 0
  }
}
