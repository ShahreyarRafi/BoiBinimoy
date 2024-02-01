import Image from "next/image";

const Blog = () => {
  return (
    <div class="max-w-6xl mx-auto mt-8 mb-36">
      <main class="mt-12">
        {/* <div class="flex flex-wrap md:flex-no-wrap space-x-0 md:space-x-6 mb-16"> */}
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-3">
          {/* main blog */}
          <div class="mb-4 lg:mb-0  p-4 lg:p-0 w-full md:w-4/7 relative rounded block">
            <Image
              src="https://images.unsplash.com/photo-1427751840561-9852520f8ce8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
              class="rounded-md object-cover w-full h-64"
              width={500}
              height={500}
              alt=""
            />
            <span class="text-[#016961] text-sm hidden md:block mt-4">
              Technology
            </span>
            <h1 class="text-black text-4xl font-bold mt-2 mb-2 leading-tight">
              Ignorant branched humanity led now marianne too.
            </h1>
            <p class="text-black mb-4">
              Necessary ye contented newspaper zealously breakfast he prevailed.
              Melancholy middletons yet understood decisively boy law she.
              Answer him easily are its barton little. Oh no though mother be
              things simple itself. Oh be me, sure wise sons, no. Piqued ye of
              am spirit regret. Stimulated discretion impossible admiration in
              particular conviction up.
            </p>
            <a
              href="#"
              class="inline-block px-6 py-3 mt-2 rounded-md bg-orange-300 hover:bg-orange-400 text-white"
            >
              Read more
            </a>
          </div>

          {/* side blog */}
          <div class="w-full md:w-4/7 px-4">
            <div class="rounded-md w-full flex flex-col md:flex-row mb-10">
              <Image
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
                class="block rounded-md h-64 md:h-32 md:m-0"
                width={500}
                height={500}
                alt=""
              />
              <div class="px-4 pt-2">
                <span class="text-orange-300 text-sm hidden md:block">
                  Gadgets
                </span>
                <div class="md:mt-0 text-blackfont-semibold text-xl mb-2">
                  At every tiled on ye defer do. No attention suspected oh
                  difficult.
                </div>
                <p class="block md:hidden p-2 pl-0 pt-1 text-sm text-black">
                  Wonder matter now can estate esteem assure fat roused. Am
                  performed on existence as discourse is. Pleasure friendly at
                  marriage blessing or
                </p>
              </div>
            </div>

            <div class="rounded-md w-full flex flex-col md:flex-row mb-10">
              <Image
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
                class="block rounded-md h-64 md:h-32 md:m-0"
                width={500}
                height={500}
                alt=""
              />
              <div class="px-4 pt-2">
                <span class="text-orange-300 text-sm hidden md:block">
                  Bitcoin
                </span>
                <div class="md:mt-0 text-black font-semibold text-xl mb-2">
                  Fond his say old meet cold find come whom. The sir park sake
                  bred.
                </div>
                <p class="block md:hidden p-2 pl-0 pt-1 text-sm text-black">
                  Integer commodo, sapien ut vulputate viverra, Integer commodo
                  Integer commodo, sapien ut vulputate viverra, Integer commodo
                </p>
              </div>
            </div>

            <div class="rounded-md w-full flex flex-col md:flex-row mb-10">
              <Image
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
                class="block rounded-md h-64 md:h-32 md:m-0"
                width={500}
                height={500}
                alt=""
              />
              <div class="px-4 pt-2">
                <span class="text-orange-300 text-sm hidden md:block">
                  Insights
                </span>
                <div class="md:mt-0 text-black font-semibold text-xl mb-2">
                  Advice me cousin an spring of needed. Tell use paid law ever
                  yet new.
                </div>
                <p class="block md:hidden p-2 pl-0 pt-1 text-sm text-black">
                  Meant to learn of vexed if style allow he there. Tiled man
                  stand tears ten joy there terms any widen.
                </p>
              </div>
            </div>

            <div class="rounded-md w-full flex flex-col md:flex-row mb-10">
              <Image
                src="https://images.unsplash.com/photo-1489844097929-c8d5b91c456e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
                class="block rounded-md h-64 md:h-32 md:m-0"
                width={500}
                height={500}
                alt=""
              />
              <div class="px-4 pt-2">
                <span class="text-orange-300 text-sm hidden md:block">
                  Cryptocurrency
                </span>
                <div class="md:mt-0 text-black font-semibold text-xl mb-2">
                  Advice me cousin an spring of needed. Tell use paid law ever
                  yet new.
                </div>
                <p class="block md:hidden p-2 pl-0 pt-1 text-sm text-black">
                  Meant to learn of vexed if style allow he there. Tiled man
                  stand tears ten joy there terms any widen.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Latest blog */}
        <div class="flex mt-16 mb-4 px-4 lg:px-0 items-center justify-between">
          <h2 class="font-bold text-xl md:text-3xl">Latest blog</h2>
          <a class="bg-orange-300 hover:bg-orange-400 text-xs md:text-sm text-white px-3 py-1 rounded cursor-pointer">
            View all
          </a>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 px-5">
          {/* latest blog 1 */}
          <div class="rounded w-full">
            <Image
              src="https://images.unsplash.com/photo-1526666923127-b2970f64b422?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
              class="rounded"
              width={500}
              height={500}
              alt=""
            />
            <div class="p-4 pl-0">
              <h2 class="font-bold text-2xl text-gray-800">
                Put all speaking her delicate recurred possible.
              </h2>
              <p class="text-gray-700 mt-2">
                Set indulgence inquietude discretion insensible bed why
                announcing. Middleton fat two satisfied additions. So continued
                he or commanded household smallness delivered. Door poor on do
                walk in half. Roof his head the what...{" "}
                <span className="text-blue-400">Read more</span>
              </p>
            </div>
          </div>

          {/* latest blog 2 */}
          <div class="rounded w-full">
            <Image
              src="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
              class="rounded"
              width={500}
              height={500}
              alt=""
            />
            <div class="p-4 pl-0">
              <h2 class="font-bold text-2xl text-gray-800">
                Is at purse tried jokes china ready decay an.{" "}
              </h2>
              <p class="text-gray-700 mt-2">
                Small its shy way had woody downs power. To denoting admitted
                speaking learning my exercise so in. Procured shutters mr it
                feelings. To or three offer house begin taken am at...{" "}
                <span className="text-blue-400">Read more</span>
              </p>
            </div>
          </div>

          {/* latest blog 3 */}
          <div class="rounded w-full">
            <Image
              src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
              class="rounded"
              width={500}
              height={500}
              alt=""
            />
            <div class="p-4 pl-0">
              <h2 class="font-bold text-2xl text-gray-800">
                As dissuade cheerful overcame so of friendly he indulged
                unpacked.
              </h2>
              <p class="text-gray-700 mt-2">
                Alteration connection to so as collecting me. Difficult in
                delivered extensive at direction allowance. Alteration put use
                diminution can considered sentiments interested discretion...{" "}
                <span className="text-blue-400">Read more</span>
              </p>
            </div>
          </div>
        </div>

        {/* newslater subscription */}
        <div class="rounded flex md:shadow my-12 bg-orange-300 ">
          <Image
            src="https://images.unsplash.com/photo-1579275542618-a1dfed5f54ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
            class="w-0 md:w-1/4 object-cover rounded-l"
            width={500}
            height={500}
            alt=""
          />
          <div class="pl-8 py-8 text-white">
            <h3 class="text-3xl  font-bold mt-4">Subscribe to newsletter</h3>
            <p class="text-xl ">
              We sent latest news and posts once in every week, fresh from the
              oven
            </p>
            <form class="mt-4">
              <input
                type="email"
                class="rounded-l px-4 py-2 focus:outline-none"
                placeholder="john@tech.com"
              />
              <button class="px-4 py-2 rounded-r bg-gray-400 hover:bg-gray-500 transition-colors text-white">
                Subscribe
              </button>
              <p class="text-black opacity-50 text-sm mt-1">
                No spam. We promise
              </p>
            </form>
          </div>
        </div>

        {/* popular blog */}
        <div class="flex mt-16 mb-4 px-4 lg:px-0 items-center justify-between">
          <h2 class="font-bold text-xl md:text-3xl">Popular blogs</h2>
          <a class="bg-orange-300 hover:bg-orange-400 text-xs md:text-sm text-white px-3 py-1 rounded cursor-pointer">
            View all
          </a>
        </div>
        {/* popular blog 1 */}
        {/* <div class="block space-x-0 lg:flex lg:space-x-6"> */}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 px-5">
          <div class="rounded w-full">
            <Image
              src="https://images.unsplash.com/photo-1526666923127-b2970f64b422?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
              class="rounded"
              width={500}
              height={500}
              alt=""
            />
            <div class="p-4 pl-0">
              <h2 class="font-bold text-2xl text-gray-800">
                Put all speaking her delicate recurred possible.
              </h2>
              <p class="text-gray-700 mt-2">
                Set indulgence inquietude discretion insensible bed why
                announcing. Middleton fat two satisfied additions. So continued
                he or commanded household smallness delivered. Door poor on do
                walk in half. Roof his head the what...{" "}
                <span className="text-blue-400">Read more</span>
              </p>
            </div>
          </div>

          {/* popular blog 2 */}
          <div class="rounded w-full">
            <Image
              src="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
              class="rounded"
              width={500}
              height={500}
              alt=""
            />
            <div class="p-4 pl-0">
              <h2 class="font-bold text-2xl text-gray-800">
                Is at purse tried jokes china ready decay an.{" "}
              </h2>
              <p class="text-gray-700 mt-2">
                Small its shy way had woody downs power. To denoting admitted
                speaking learning my exercise so in. Procured shutters mr it
                feelings. To or three offer house begin taken am at...{" "}
                <span className="text-blue-400">Read more</span>
              </p>
            </div>
          </div>

          {/* popular blog 3 */}
          <div class="rounded w-full">
            <Image
              src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
              class="rounded"
              width={500}
              height={500}
              alt=""
            />
            <div class="p-4 pl-0">
              <h2 class="font-bold text-2xl text-gray-800">
                As dissuade cheerful overcame so of friendly he indulged
                unpacked.
              </h2>
              <p class="text-gray-700 mt-2">
                Alteration connection to so as collecting me. Difficult in
                delivered extensive at direction allowance. Alteration put use
                diminution can considered sentiments interested discretion...{" "}
                <span className="text-blue-400">Read more</span>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Blog;
