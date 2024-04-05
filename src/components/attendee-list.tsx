import searchicon from '../assets/images/search-icon.svg';
import tdbutton from '../assets/images/td-button.svg';
import IconButton from '../components/icon-button.js';
import TFooter from './tfooter.js';

function AttendeeList() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-3 items-center">
        <h1 className="text-2xl font-bold">Participantes</h1>
        <div className="px-3 py-1.5 border border-white/10  rounded-lg text-sm w-72 flex items-center gap-3">
          <img className="size-4 text-emerald-300" src={searchicon} />
          <input
            className="bg-transparent flex-1 outline-none"
            placeholder="Buscar participante"
          ></input>
        </div>
      </div>
      <div className="border border-white/10 rounded-lg">
        <table className="w-full ">
          <thead>
            <tr className="border-b border-white/10">
              <th
                style={{ width: 64 }}
                className="py-3 px-4 text-sm font-semibold text-left"
              >
                <input
                  className="size-4 bg-black/20 rounded border border-white/10"
                  type={'checkbox'}
                />
              </th>
              <th className="py-3 px-4 text-sm font-semibold text-left">
                Código
              </th>
              <th className="py-3 px-4 text-sm font-semibold text-left">
                Participante
              </th>
              <th className="py-3 px-4 text-sm font-semibold text-left">
                Data de inscrição
              </th>
              <th className="py-3 px-4 text-sm font-semibold text-left">
                Data de check-in
              </th>
              <th
                style={{ width: 64 }}
                className="py-3 px-4 text-sm font-semibold"
              ></th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 5 }).map(() => {
              return (
                <tr className="border-b border-white/10 hover:bg-white/5">
                  <td className="py-3 px-4 text-sm text-zinc-300">
                    <input
                      className="size-4 bg-black/20 rounded border border-white/10"
                      type={'checkbox'}
                    />
                  </td>
                  <td className="py-3 px-4 text-sm text-zinc-300">12345</td>
                  <td className="py-3 px-4 text-sm text-zinc-300 flex flex-col gap-1">
                    <span className="font-semibold text-white">
                      Fulaninho de tal
                    </span>
                    <span>fulanin@detal.com</span>
                  </td>
                  <td className="py-3 px-4 text-sm text-zinc-300">
                    20 days ago
                  </td>
                  <td className="py-3 px-4 text-sm text-zinc-300">
                    7 days ago
                  </td>
                  <td className="py-3 px-4 text-sm text-zinc-300">
                    <IconButton>
                      <img src={tdbutton} />
                    </IconButton>
                  </td>
                </tr>
              );
            })}{' '}
          </tbody>
          <TFooter />{' '}
        </table>
      </div>
    </div>
  );
}

export default AttendeeList;
