import React from "react";
import { Link } from "react-router-dom";
export default function PopularPost({ PostData }) {
  return (
    <div className="widget">
      <h3 className="title" style={{}}>
        Popular Posts
      </h3>
      <div className="body">
        <ul className="no-bullet">
          {PostData.slice(0, 12).map((item) => {
            return (
              <li>
                <Link
                  to={`/blog/${item.id}`}
                  state={{
                    data: {
                      title: item.title,
                    },
                  }}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
