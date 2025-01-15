import React from "react";
import "./stepstable.css";
import { convertData } from "@/utils/dataConverter";
import { dateFormatter } from "@/utils/dateFormatter";
import { TStepsItem } from "@/types";

type TProps = {
  data: TStepsItem[];
  onEditData: (param: TStepsItem) => void;
  onDeleteData: (param: TStepsItem) => void;
};

const StepsTable: React.FC<TProps> = ({ data, onEditData, onDeleteData }) => {
  const convertedData = convertData(data);
  return (
    <div className="stepstable-wrapper scroll-table">
      <table className="stepstable">
        <thead className="stepstable-thead">
          <tr>
            <th className="stepstable-th">Дата (ДД.ММ.ГГГ)</th>
            <th className="stepstable-th">Пройдено, км </th>
            <th className="stepstable-th">Действия</th>
          </tr>
        </thead>
      </table>
      <div className="scroll-table-body bordered">
        <table>
          <tbody className="stepstable-tbody">
            {convertedData.map((stepsItem) => {
              return (
                <tr key={stepsItem.date}>
                  <td className="stepstable-td">{dateFormatter(stepsItem.date)}</td>
                  <td className="stepstable-td">
                    {stepsItem.quantity.toFixed(1)}
                  </td>
                  <td className="stepstable-td">
                    <button className="stepstable-btn"
                      onClick={() => onEditData({ ...stepsItem, edit: true })}
                    >
                      <i className="fa fa-pencil" aria-hidden="true"></i>
                    </button>
                    <button className="stepstable-btn"
                      onClick={() => onDeleteData({ ...stepsItem })}
                    >
                      <i className="fa fa-trash-o" aria-hidden="true"></i>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StepsTable;
