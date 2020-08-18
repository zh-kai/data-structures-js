import { expect } from 'chai';
import Queue from '../src/queue';

describe('Queue unit tests:', () => {
  let queue = null

  describe('new Queue()', () => {
    it('create a new queue', () => {
      queue = new Queue()
    })
  })

  describe('Queue.fromArray(arr)', () => {
    it('create a new queue from array', () => {
      queue = Queue.fromArray([1, 2, 3])

      expect(queue.front()).eq(1)
      expect(queue.back()).eq(3)
    })
  })

  describe('enqueue(element)', () => {
    it('add elements at the back of queue', () => {
      queue = new Queue()
      queue.enqueue(10)
      expect(queue.back()).eq(10)
      queue.enqueue(20)
      expect(queue.back()).eq(20)
    })
  })

  describe('dequeue()', () => {
    it('dequeue the front element of the queue', () => {
      queue = new Queue([1, 2, 3])

      expect(queue.front()).eq(1)
      queue.dequeue()
      expect(queue.front()).eq(2)
      queue.dequeue()
      expect(queue.front()).eq(3)
    })
  })

  describe('size()', () => {
    it('return the queue size', () => {
      queue = new Queue([1, 2, 3, 4, 5])
      expect(queue.size()).eq(5)
    })
  })

  describe('front()', () => {
    it('peeks on the front element of the queue', () => {
      queue = new Queue([11, 12])
      expect(queue.front()).eq(11)
    })
  })

  describe('back()', () => {
    it('peeks on the back element of the queue', () => {
      queue = new Queue([11, 12])
      expect(queue.back()).eq(12)
    })
  })

  describe('isEmpty()', () => {
    it('checks if the queue is empty', () => {
      queue = new Queue()
      expect(queue.isEmpty()).eq(true)
    })
  })

  describe('clone()', () => {
    it('creates a shallow copy of the queue', () => {
      queue = new Queue([4, 5, 6])
      let clone = queue.clone()

      expect(clone.front()).eq(4)
      queue.dequeue()
      expect(queue.front()).eq(5)
      expect(clone.front()).eq(4)

      clone.dequeue()
      expect(queue.front()).eq(5)
      expect(clone.front()).eq(5)
    })
  })

  describe('clear()', () => {
    it('clears all elements from the queue', () => {
      queue = new Queue([1, 2, 3])

      expect(queue.isEmpty()).eq(false)

      queue.clear()
      expect(queue.isEmpty()).eq(true)
    })
  })

  describe('toArray()', () => {
    it('should convert the queue into an array', () => {
      queue = new Queue([1, 2, 3])

      expect(queue.toArray()).to.deep.equal([1, 2, 3]);
    });
  });
})
