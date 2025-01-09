import React from "react";

export default function ContentComponent(props) {
  // Ensure title is a string
  const title = props?.title || "Default Title";

  const section = props?.sections || [];
  const otherPage =  false;

  return (
    <div id={otherPage ? "contentNew" : "content"}>
      {
       otherPage ? (
          <div>Content for content page goes here</div> // Example for contentPage case
        ) : (
          <>
            <h1>{title}</h1>
            <p>{props?.description }</p>
            {section.map((item, index) => {
              const { type, heading, content, subType, table,subDesc=false, shortSumm= false } = item;

              return (
                <React.Fragment key={index}>
                  {heading && <h2>{heading}</h2>}
                  {subDesc}
                  {type === "string" && <p>{content}</p>}
                  {type === "array_of_strings" &&
                    content.map((str, index) => <p key={index}>{str}</p>)}
                  {type === "array" && subType === "ol-list" && (
                    <ol>
                      {Array.isArray(content) &&
                        content.map((listItem, listIndex) => (
                          <li key={listIndex}>
                            <p>
                              <strong>{listItem.title} - </strong>
                              {listItem.description}
                            </p>
                          </li>
                        ))}
                    </ol>
                  )}
                  {type === "array" && subType === "ul-list" && (
                    <ul>
                      {Array.isArray(content) &&
                        content.map((listItem, listIndex) => (
                          <li key={listIndex}>
                            <p>
                              <strong>{listItem.title} - </strong>
                              {listItem.description}
                            </p>
                          </li>
                        ))}
                    </ul>
                  )}
                  {type === "table" && table && (
                    <table summary="Summary Here" cellPadding="0" cellSpacing="0">
                      <thead>
                        <tr>
                          {table.columns.map((column, colIdx) => (
                            <th key={`col-${colIdx}`}>{column}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {table.rows.map((row, rowIdx) => (
                          <tr
                            key={`row-${rowIdx}`}
                            className={rowIdx % 2 === 0 ? "light" : "dark"}
                          >
                            {table.columns.map((column, colIdx) => (
                              <td key={`row-${rowIdx}-col-${colIdx}`}>
                                {row[column]}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                  {
                    shortSumm && <p>{shortSumm}</p>
                  }
                </React.Fragment>
              );
            })}
          </>
        )
      }
    </div>
  );
}
