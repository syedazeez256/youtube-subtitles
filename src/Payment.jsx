import React from "react";

const Payment = () => {
  return (
    <>
      <div className="grid grid-rows-3 p-3">
        <div>
          <div>
            <span className="text-2xl font-bold">Upcoming invoice</span>{" "}
            <span className="font-normal text-gray-500">for</span>{" "}
            <span className="font-medium">$20.00</span>
          </div>
          <div>
            <span>Next invoice for subscription to</span>{" "}
            <span className="text-blue-600">
              LetzChat &#x2022; fixed-monthly-price and 3 more...
            </span>{" "}
            <span>| will be billed on</span>{" "}
            <span className="font-medium">Feb 17</span>
          </div>
        </div>
        <div>
          <div className="text-1xl font-bold mb-2">Summary</div> <hr />
          <div className="grid grid-cols-2">
            <div>
              <table class="table-auto">
                <tr>
                  <td className="font-normal text-gray-500">Bill to</td>
                  <td className="pl-10">Aziz@heeramandi.com</td>
                </tr>
                <tr>
                  <td className="font-normal text-gray-500">Billing Details</td>
                  <td className="pl-10">Aziz </td>
                </tr>
              </table>
            </div>
            <div>
              <table class="table-auto">
                <tr>
                  <td className="font-normal text-gray-500">Invoice number</td>
                  <td className="pl-10">F5002-304442</td>
                </tr>
                <tr>
                  <td className="font-normal text-gray-500">Currency</td>
                  <td className="pl-10">Quaid-e-Azam</td>
                </tr>
                <tr>
                  <td className="font-normal text-gray-500">Billing method</td>
                  <td className="pl-10">hhhh</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <div>
          <table className="min-w-full divide-y divide-slate-500">
            <thead>
              <tr>
                <th className="py-3.5 pl-4 pr-3 text-left text-xs font-bold text-slate-700 sm:pl-6 md:pl-0">
                  DESCRIPTION
                </th>

                <th className="py-3.5 px-3 text-right text-xs font-bold text-slate-700 sm:table-cell">
                  QTY
                </th>
                <th className="py-3.5 px-3 text-right text-xs font-bold text-slate-700 sm:table-cell">
                  UNIT PRICE
                </th>
                <th className="py-3.5 px-3 text-right text-xs font-bold text-slate-700 sm:table-cell">
                  AMOUNT
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-200">
                <td className="py-4 pl-4 pr-3 text-sm sm:pl-6 md:pl-0">
                  JAN 17 - FEB 17 2023
                </td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="py-4 pl-4 pr-3 text-sm font-bold sm:pl-6 md:pl-0">
                  LetzChat
                </td>
                <td className=" px-3 py-4 text-sm text-right text-slate-500 sm:table-cell">
                  2
                </td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="py-4 pl-4 pr-3 text-sm sm:pl-6 md:pl-0">
                  First 1200
                </td>
                <td className=" px-3 py-4 text-sm text-right text-slate-500 sm:table-cell">
                  2
                </td>
                <td className="px-3 py-4 text-sm text-right text-slate-500 sm:table-cell">
                  $20.00
                </td>
                <td className="py-4 pl-3 pr-4 text-sm text-right text-slate-500 sm:pr-6 md:pr-0">
                  $20.00
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th
                  scope="row"
                  colspan="3"
                  className="pt-6 pl-6 pr-3 text-sm font-bold text-right  sm:table-cell md:pl-0"
                >
                  Subtotal
                </th>
                <td className="pt-6 pl-3 pr-4 text-sm text-right font-bold  sm:pr-6 md:pr-0">
                  $0.00
                </td>
              </tr>
              <tr>
                <th
                  scope="row"
                  colspan="3"
                  className="pt-6 pl-6 pr-3 text-sm font-bold text-right  sm:table-cell md:pl-0"
                >
                  Total
                </th>
                <td className="pt-6 pl-3 pr-4 text-sm text-right font-bold  sm:pr-6 md:pr-0">
                  $0.00
                </td>
              </tr>
              <tr>
                <th
                  scope="row"
                  colspan="3"
                  className="pt-4 pl-6 pr-3 text-sm font-bold text-right  sm:table-cell md:pl-0"
                >
                  Amount due
                </th>

                <td className="pt-4 pl-3 pr-4 text-sm text-right font-bold  sm:pr-6 md:pr-0">
                  $0.00
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </>
  );
};

export default Payment;
