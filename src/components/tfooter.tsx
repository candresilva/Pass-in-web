import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from '../assets/images/chevrons.js';
import IconButton from './icon-button.js';

function TFooter() {
  return (
    <tfoot>
      <tr>
        <td className="py-3 px-4 text-sm text-zinc-300 text-left" colSpan={3}>
          Showing 10 of 228 items
        </td>
        <td className="py-3 px-4 text-sm text-zinc-300 text-right" colSpan={3}>
          <div className="inline-flex items-center gap-8">
            <span>Page 1 of 23</span>
            <div className="flex gap-1.5">
              <IconButton>
                <ChevronsLeft />
              </IconButton>
              <IconButton>
                <ChevronLeft />
              </IconButton>
              <IconButton>
                <ChevronRight />
              </IconButton>
              <IconButton>
                <ChevronsRight />
              </IconButton>
            </div>
          </div>
        </td>
      </tr>
    </tfoot>
  );
}

export default TFooter;
