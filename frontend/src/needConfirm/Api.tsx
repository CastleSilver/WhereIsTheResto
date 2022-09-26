import React from "react"
import { user, review, like, visited } from "../api/index"

export default function Api() {
  return (
    <>
      <h1>USER</h1>
      <button
        onClick={() => {
          user.delete()
        }}
      >
        Delete User
      </button>
      <button
        onClick={() => {
          user.info(3)
        }}
      >
        Get User Info
      </button>
      <button
        onClick={() => {
          user.update({})
        }}
      >
        Update User Info
      </button>
      <br />
      <h1>REVIEW</h1>
      <button
        onClick={() => {
          review.create({ restoId: 1, content: "asd", rating: 4 })
        }}
      >
        CREATE |
      </button>
      <button
        onClick={() => {
          review.get(1)
        }}
      >
        GET |
      </button>
      <button
        onClick={() => {
          review.delete(1)
        }}
      >
        DELETE |
      </button>
      <button
        onClick={() => {
          review.update({ restoId: 1, content: "asd", rating: 4 })
        }}
      >
        UPDATE |
      </button>
      <hr />
      <h1>LIKE</h1>
      <button
        onClick={() => {
          like.do(1)
        }}
      >
        LIKE |
      </button>
      <button
        onClick={() => {
          like.undo(1)
        }}
      >
        UNLIKE |
      </button>
      <hr />
      <h1>LIKE</h1>
      <button
        onClick={() => {
          visited.do(1)
        }}
      >
        VISITED |
      </button>
      <button
        onClick={() => {
          visited.undo(1)
        }}
      >
        NOT VISITED |
      </button>
    </>
  )
}
