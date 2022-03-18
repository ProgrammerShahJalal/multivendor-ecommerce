import React, { createRef } from "react";
import Pdf from "react-to-pdf";
const ref = createRef();

const Invoice = () => {
  return (
    <div className="overflow-hidden">

      <div className="mx-auto w-full h-96" style={{ marginX: 'auto', overflowX: 'scroll', scrollbarColor: 'blue', scrollbarWidth: 'thin' }} ref={ref}>
        <div class="mx-auto p-16">
          <div class="flex items-center justify-between mb-8 px-3">
            <div>
              <span class="text-2xl">Example Invoice #</span>: 0001-2019<br />
              <span>Date</span>:  January 1st 2019<br />
            </div>
            <div class="text-right">
              <img src="https://www.stenvdb.be/assets/img/email-signature.png" alt="" />
            </div>
          </div>

          <div class="flex justify-between mb-8 px-3">
            <div>
              Pixel &amp; Tonic<br />
              919 NW Bond St. Ste 203<br />
              Bend, OR 97703 USA<br />
              hello@pixelandtonic.com<br />
              +1 855-700-5115
            </div>
            <div class="text-right">
              Company Name<br />
              Street 12<br />
              10000 City<br />
              hello@yoursite.com
            </div>
          </div>

          <div class="border border-t-2 border-gray-200 mb-8 px-3"></div>

          <div class="mb-8 px-3">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquam vestibulum elit, id rutrum sem lobortis eget. In a massa et leo vehicula dapibus. In convallis ut nisi ut vestibulum. Integer non feugiat tellus. Nullam id ex suscipit, volutpat sapien tristique, porttitor sapien.</p>
          </div>

          <div class="flex justify-between mb-4 bg-gray-200 px-3 py-2">
            <div>Development</div>
            <div class="text-right font-medium">1200 EUR</div>
          </div>
          <div class="flex justify-between mb-4 bg-gray-200 px-3 py-2">
            <div>Design</div>
            <div class="text-right font-medium">800 EUR</div>
          </div>
          <div class="flex justify-between mb-4 bg-gray-200 px-3 py-2">
            <div>Licensing</div>
            <div class="text-right font-medium">300 EUR</div>
          </div>

          <div class="flex justify-between items-center mb-2 px-3">
            <div class="text-2xl leading-none"><span class="">Total</span>:</div>
            <div class="text-2xl text-right font-medium">2300 EUR</div>
          </div>

          <div class="flex mb-8 justify-end px-3">
            <div class="text-right w-1/2 px-0 leading-tight">
              <small class="text-xs">Nullam auctor, tellus sit amet eleifend interdum, quam nisl luctus quam, a tincidunt nisi eros ac dui. Curabitur leo ipsum, bibendum sit amet suscipit sed, gravida non lectus. Nunc porttitor lacus sapien, nec congue quam cursus nec. Quisque vel vehicula ipsum. Donec condimentum dolor est, ut interdum augue blandit luctus. </small>
            </div>
          </div>

          <div class="mb-8 px-3">
            <span>To be paid before</span>  Februari 1st 2019 on <b class="underline font-bold">BE71 0961 2345 6769</b> specifying the invoice #
          </div>
        </div>
      </div>
      <Pdf targetRef={ref} filename="invoice.pdf">
        {({ toPdf }) => (
          <button className="mx-auto flex items-center justify-center my-6 border border-indigo-500 bg-white dark:bg-slate-800 text-indigo-500 p-2 rounded-sm hover:bg-indigo-500 hover:text-white" onClick={toPdf}><i className="fa-light fa-file-arrow-down pe-2"></i>ㅤDownload invoice</button>
        )}
      </Pdf>
    </div>
  );
};

export default Invoice;