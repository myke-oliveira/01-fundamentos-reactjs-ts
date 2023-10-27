import { ThumbsUp, Trash } from "@phosphor-icons/react";
import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";
import { useState } from "react";

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likesCount, setLikesCount] = useState(0)

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  function handleLikesCount() {
    setLikesCount(state => (state + 1));
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/myke-oliveira.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Myke Albuquerque</strong>
              <time title="14 de outubro às 10h40" dateTime="2023-10-14 10:40:35">Cerca de 1h atrás</time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikesCount}>
            <ThumbsUp />
            Aplaudir <span>{likesCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}