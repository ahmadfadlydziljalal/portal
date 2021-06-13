import Header from "./components/Header";
import Nav from "./components/Nav";
import { ExternalLinkIcon } from "@heroicons/react/outline";

function App() {
  return (
    <div className="bg-gray-900 h-screen">
      <Nav />
      <Header />
      <main>
        <div className="max-w-7xl mx-auto py-1 sm:px-6 lg:px-8 ">
          
          {/* Replace with your content */}
          
          <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 px-3 md:px-0 lg:px-0">
            <div class="rounded overflow-hidden shadow-lg bg-yellow-100">
              <div class="px-6 py-4">
                <div class="flex justify-between">
                  <div class="font-bold text-xl mb-2">SI.AKUN</div>

                  <a href="#">
                    <ExternalLinkIcon className="h-8 w-8 text-blue-900" />
                  </a>
                </div>
                <p class="text-gray-700 text-base">
                  Sistem Informasi untuk pengelolaan transaksi keuangan menjadi
                  Laporan Keuangan yang dibutuhkan perusahaan / unit usaha.
                </p>
              </div>
              <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-900 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                  #akunting
                </span>
                <span class="inline-block bg-gray-900 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                  #accounting
                </span>
                <span class="inline-block bg-gray-900 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                  #pembukuan
                </span>
              </div>
            </div>

            <div class="rounded overflow-hidden shadow-lg bg-white">
              <div class="px-6 py-4">
                <div class="flex justify-between">
                  <div class="font-bold text-xl mb-2">SI.HRD</div>

                  <a href="#">
                    <ExternalLinkIcon className="h-8 w-8 text-blue-900" />
                  </a>
                </div>
                <p class="text-gray-700 text-base">
                  Sistem Informasi untuk pengelolaan Human Resource Development
                  di dalam sebuah perusahaan / unit usaha.
                </p>
              </div>
              <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-900 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                  #humanResource
                </span>
                <span class="inline-block bg-gray-900 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                  #absensi
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* /End replace */}
      </main>
    </div>
  );
}

export default App;
