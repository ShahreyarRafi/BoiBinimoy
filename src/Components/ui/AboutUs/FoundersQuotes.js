import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Popover,
  PopoverHandler,
  PopoverContent,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import { Lora } from "next/font/google";

const lora = Lora({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const FoundersQuotes = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className={lora.className}>
        <Typography className="mb-2 text-2xl md:text-3xl lg:text-4xl text-center font-bold">
          Founders Quotes
        </Typography>
      </div>

      <Typography className="mb-5 opacity-80 text-xl font-light text-center">
        Words from the Heart
      </Typography>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {/* Atik Sharia */}
        <Card
          shadow={false}
          className="relative grid h-96 w-full max-w-[28rem] items-end justify-center overflow-hidden text-center"
        >
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="absolute inset-0 m-0 h-full w-full object-cover rounded-none bg-[url('https://i.postimg.cc/MTy0xy3H/bookshelf-arranged-in-rainbow-pattern-jpg-optimal.jpg')] bg-cover bg-center"
          >
            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
          </CardHeader>
          <CardBody className="relative py-14 px-6 md:px-12">
            <Typography
              variant="h5"
              color="white"
              className="mb-6 font-medium leading-[1.5]"
            >
              It all started with a shared love for books and a desire to build
              a community where stories could travel freely
            </Typography>
            <Typography variant="h5" className="mb-4 text-gray-400">
              Atik Sharia
            </Typography>

            <Popover placement="bottom-end">
              <PopoverHandler>
                <Avatar
                  size="xl"
                  variant="circular"
                  alt="Atik Sharia"
                  className="border-2 border-white rounded-full w-16"
                  src="https://docs.material-tailwind.com/img/team-4.jpg"
                />
              </PopoverHandler>
              <PopoverContent className="w-72">
                <div className="mb-4 flex items-center gap-4 border-b border-blue-gray-50 pb-4">
                  <Avatar
                    src="https://docs.material-tailwind.com/img/team-4.jpg"
                    alt="Atik Sharia"
                    className="rounded-full w-16 m-2"
                  />
                  <div>
                    <Typography variant="h6" color="blue-gray">
                      Atik Sharia
                    </Typography>
                    <Typography
                      variant="small"
                      color="gray"
                      className="font-medium text-blue-gray-500"
                    >
                      General Manager
                    </Typography>
                  </div>
                </div>
                <List className="p-0">
                  <a
                    href="#"
                    className="text-initial font-medium text-blue-gray-500"
                  >
                    <ListItem>
                      <ListItemPrefix className="mr-2">
                        <svg
                          width="14"
                          height="16"
                          viewBox="0 0 14 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M1 2C1 1.46957 1.21071 0.960859 1.58579 0.585786C1.96086 0.210714 2.46957 0 3 0H11C11.5304 0 12.0391 0.210714 12.4142 0.585786C12.7893 0.960859 13 1.46957 13 2V14C13.2652 14 13.5196 14.1054 13.7071 14.2929C13.8946 14.4804 14 14.7348 14 15C14 15.2652 13.8946 15.5196 13.7071 15.7071C13.5196 15.8946 13.2652 16 13 16H10C9.73478 16 9.48043 15.8946 9.29289 15.7071C9.10536 15.5196 9 15.2652 9 15V13C9 12.7348 8.89464 12.4804 8.70711 12.2929C8.51957 12.1054 8.26522 12 8 12H6C5.73478 12 5.48043 12.1054 5.29289 12.2929C5.10536 12.4804 5 12.7348 5 13V15C5 15.2652 4.89464 15.5196 4.70711 15.7071C4.51957 15.8946 4.26522 16 4 16H1C0.734784 16 0.48043 15.8946 0.292893 15.7071C0.105357 15.5196 0 15.2652 0 15C0 14.7348 0.105357 14.4804 0.292893 14.2929C0.48043 14.1054 0.734784 14 1 14V2ZM4 3H6V5H4V3ZM6 7H4V9H6V7ZM8 3H10V5H8V3ZM10 7H8V9H10V7Z"
                            fill="#90A4AE"
                          />
                        </svg>
                      </ListItemPrefix>
                      Hexa Developers
                    </ListItem>
                  </a>
                  <a
                    href="#"
                    className="text-initial font-medium text-blue-gray-500"
                  >
                    <ListItem>
                      <ListItemPrefix className="mr-2">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0 1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0H3.153C3.38971 0.000108969 3.6187 0.0841807 3.79924 0.23726C3.97979 0.390339 4.10018 0.602499 4.139 0.836L4.879 5.271C4.91436 5.48222 4.88097 5.69921 4.78376 5.89003C4.68655 6.08085 4.53065 6.23543 4.339 6.331L2.791 7.104C3.34611 8.47965 4.17283 9.72928 5.22178 10.7782C6.27072 11.8272 7.52035 12.6539 8.896 13.209L9.67 11.661C9.76552 11.4695 9.91994 11.3138 10.1106 11.2166C10.3012 11.1194 10.5179 11.0859 10.729 11.121L15.164 11.861C15.3975 11.8998 15.6097 12.0202 15.7627 12.2008C15.9158 12.3813 15.9999 12.6103 16 12.847V15C16 15.2652 15.8946 15.5196 15.7071 15.7071C15.5196 15.8946 15.2652 16 15 16H13C5.82 16 0 10.18 0 3V1Z"
                            fill="#90A4AE"
                          />
                        </svg>
                      </ListItemPrefix>
                      00 123 456 789
                    </ListItem>
                  </a>
                  <a
                    href="#"
                    className="text-initial font-medium text-blue-gray-500"
                  >
                    <ListItem>
                      <ListItemPrefix className="mr-2">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.00299 5.884L9.99999 9.882L17.997 5.884C17.9674 5.37444 17.7441 4.89549 17.3728 4.54523C17.0015 4.19497 16.5104 3.99991 16 4H3.99999C3.48958 3.99991 2.99844 4.19497 2.62717 4.54523C2.2559 4.89549 2.03259 5.37444 2.00299 5.884Z"
                            fill="#90A4AE"
                          />
                          <path
                            d="M18 8.11798L10 12.118L2 8.11798V14C2 14.5304 2.21071 15.0391 2.58579 15.4142C2.96086 15.7893 3.46957 16 4 16H16C16.5304 16 17.0391 15.7893 17.4142 15.4142C17.7893 15.0391 18 14.5304 18 14V8.11798Z"
                            fill="#90A4AE"
                          />
                        </svg>
                      </ListItemPrefix>
                      person@example.com
                    </ListItem>
                  </a>
                </List>
              </PopoverContent>
            </Popover>
          </CardBody>
        </Card>

        {/* Md Parvej */}
        <Card
          shadow={false}
          className="relative grid h-96 w-full max-w-[28rem] items-end justify-center overflow-hidden text-center"
        >
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="absolute inset-0 m-0 h-full w-full object-cover rounded-none bg-[url('https://i.postimg.cc/MTy0xy3H/bookshelf-arranged-in-rainbow-pattern-jpg-optimal.jpg')] bg-cover bg-center"
          >
            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
          </CardHeader>
          <CardBody className="relative py-14 px-6 md:px-12">
            <Typography
              variant="h5"
              color="white"
              className="mb-6 font-medium leading-[1.5]"
            >
              We believe that everyone deserves access to books, regardless of
              location or resources
            </Typography>
            <Typography variant="h5" className="mb-4 text-gray-400">
              Md Parvej
            </Typography>

            <Popover placement="bottom-end">
              <PopoverHandler>
                <Avatar
                  size="xl"
                  variant="circular"
                  alt="Md Parvej"
                  className="border-2 border-white rounded-full w-16"
                  src="https://docs.material-tailwind.com/img/team-4.jpg"
                />
              </PopoverHandler>
              <PopoverContent className="w-72">
                <div className="mb-4 flex items-center gap-4 border-b border-blue-gray-50 pb-4">
                  <Avatar
                    src="https://docs.material-tailwind.com/img/team-4.jpg"
                    alt="Md Parvej"
                    className="rounded-full w-16 m-2"
                  />
                  <div>
                    <Typography variant="h6" color="blue-gray">
                      Md Parvej
                    </Typography>
                    <Typography
                      variant="small"
                      color="gray"
                      className="font-medium text-blue-gray-500"
                    >
                      General Manager
                    </Typography>
                  </div>
                </div>
                <List className="p-0">
                  <a
                    href="#"
                    className="text-initial font-medium text-blue-gray-500"
                  >
                    <ListItem>
                      <ListItemPrefix className="mr-2">
                        <svg
                          width="14"
                          height="16"
                          viewBox="0 0 14 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M1 2C1 1.46957 1.21071 0.960859 1.58579 0.585786C1.96086 0.210714 2.46957 0 3 0H11C11.5304 0 12.0391 0.210714 12.4142 0.585786C12.7893 0.960859 13 1.46957 13 2V14C13.2652 14 13.5196 14.1054 13.7071 14.2929C13.8946 14.4804 14 14.7348 14 15C14 15.2652 13.8946 15.5196 13.7071 15.7071C13.5196 15.8946 13.2652 16 13 16H10C9.73478 16 9.48043 15.8946 9.29289 15.7071C9.10536 15.5196 9 15.2652 9 15V13C9 12.7348 8.89464 12.4804 8.70711 12.2929C8.51957 12.1054 8.26522 12 8 12H6C5.73478 12 5.48043 12.1054 5.29289 12.2929C5.10536 12.4804 5 12.7348 5 13V15C5 15.2652 4.89464 15.5196 4.70711 15.7071C4.51957 15.8946 4.26522 16 4 16H1C0.734784 16 0.48043 15.8946 0.292893 15.7071C0.105357 15.5196 0 15.2652 0 15C0 14.7348 0.105357 14.4804 0.292893 14.2929C0.48043 14.1054 0.734784 14 1 14V2ZM4 3H6V5H4V3ZM6 7H4V9H6V7ZM8 3H10V5H8V3ZM10 7H8V9H10V7Z"
                            fill="#90A4AE"
                          />
                        </svg>
                      </ListItemPrefix>
                      Hexa Developers
                    </ListItem>
                  </a>
                  <a
                    href="#"
                    className="text-initial font-medium text-blue-gray-500"
                  >
                    <ListItem>
                      <ListItemPrefix className="mr-2">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0 1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0H3.153C3.38971 0.000108969 3.6187 0.0841807 3.79924 0.23726C3.97979 0.390339 4.10018 0.602499 4.139 0.836L4.879 5.271C4.91436 5.48222 4.88097 5.69921 4.78376 5.89003C4.68655 6.08085 4.53065 6.23543 4.339 6.331L2.791 7.104C3.34611 8.47965 4.17283 9.72928 5.22178 10.7782C6.27072 11.8272 7.52035 12.6539 8.896 13.209L9.67 11.661C9.76552 11.4695 9.91994 11.3138 10.1106 11.2166C10.3012 11.1194 10.5179 11.0859 10.729 11.121L15.164 11.861C15.3975 11.8998 15.6097 12.0202 15.7627 12.2008C15.9158 12.3813 15.9999 12.6103 16 12.847V15C16 15.2652 15.8946 15.5196 15.7071 15.7071C15.5196 15.8946 15.2652 16 15 16H13C5.82 16 0 10.18 0 3V1Z"
                            fill="#90A4AE"
                          />
                        </svg>
                      </ListItemPrefix>
                      00 123 456 789
                    </ListItem>
                  </a>
                  <a
                    href="#"
                    className="text-initial font-medium text-blue-gray-500"
                  >
                    <ListItem>
                      <ListItemPrefix className="mr-2">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.00299 5.884L9.99999 9.882L17.997 5.884C17.9674 5.37444 17.7441 4.89549 17.3728 4.54523C17.0015 4.19497 16.5104 3.99991 16 4H3.99999C3.48958 3.99991 2.99844 4.19497 2.62717 4.54523C2.2559 4.89549 2.03259 5.37444 2.00299 5.884Z"
                            fill="#90A4AE"
                          />
                          <path
                            d="M18 8.11798L10 12.118L2 8.11798V14C2 14.5304 2.21071 15.0391 2.58579 15.4142C2.96086 15.7893 3.46957 16 4 16H16C16.5304 16 17.0391 15.7893 17.4142 15.4142C17.7893 15.0391 18 14.5304 18 14V8.11798Z"
                            fill="#90A4AE"
                          />
                        </svg>
                      </ListItemPrefix>
                      person@example.com
                    </ListItem>
                  </a>
                </List>
              </PopoverContent>
            </Popover>
          </CardBody>
        </Card>

        {/* Fousal Ahmed */}
        <Card
          shadow={false}
          className="relative grid h-96 w-full max-w-[28rem] items-end justify-center overflow-hidden text-center"
        >
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="absolute inset-0 m-0 h-full w-full object-cover rounded-none bg-[url('https://i.postimg.cc/MTy0xy3H/bookshelf-arranged-in-rainbow-pattern-jpg-optimal.jpg')] bg-cover bg-center"
          >
            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
          </CardHeader>
          <CardBody className="relative py-14 px-6 md:px-12">
            <Typography
              variant="h5"
              color="white"
              className="mb-6 font-medium leading-[1.5]"
            >
              Boi Binimoy is more than just a platform; it&apos;s a vibrant
              community where bookworms connect and share their passions
            </Typography>
            <Typography variant="h5" className="mb-4 text-gray-400">
              Fousal Ahmed
            </Typography>

            <Popover placement="bottom-end">
              <PopoverHandler>
                <Avatar
                  size="xl"
                  variant="circular"
                  alt="Fousal Ahmed"
                  className="border-2 border-white rounded-full w-16"
                  src="https://docs.material-tailwind.com/img/team-4.jpg"
                />
              </PopoverHandler>
              <PopoverContent className="w-72">
                <div className="mb-4 flex items-center gap-4 border-b border-blue-gray-50 pb-4">
                  <Avatar
                    src="https://docs.material-tailwind.com/img/team-4.jpg"
                    alt="Fousal Ahmed"
                    className="rounded-full w-16 m-2"
                  />
                  <div>
                    <Typography variant="h6" color="blue-gray">
                      Fousal Ahmed
                    </Typography>
                    <Typography
                      variant="small"
                      color="gray"
                      className="font-medium text-blue-gray-500"
                    >
                      General Manager
                    </Typography>
                  </div>
                </div>
                <List className="p-0">
                  <a
                    href="#"
                    className="text-initial font-medium text-blue-gray-500"
                  >
                    <ListItem>
                      <ListItemPrefix className="mr-2">
                        <svg
                          width="14"
                          height="16"
                          viewBox="0 0 14 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M1 2C1 1.46957 1.21071 0.960859 1.58579 0.585786C1.96086 0.210714 2.46957 0 3 0H11C11.5304 0 12.0391 0.210714 12.4142 0.585786C12.7893 0.960859 13 1.46957 13 2V14C13.2652 14 13.5196 14.1054 13.7071 14.2929C13.8946 14.4804 14 14.7348 14 15C14 15.2652 13.8946 15.5196 13.7071 15.7071C13.5196 15.8946 13.2652 16 13 16H10C9.73478 16 9.48043 15.8946 9.29289 15.7071C9.10536 15.5196 9 15.2652 9 15V13C9 12.7348 8.89464 12.4804 8.70711 12.2929C8.51957 12.1054 8.26522 12 8 12H6C5.73478 12 5.48043 12.1054 5.29289 12.2929C5.10536 12.4804 5 12.7348 5 13V15C5 15.2652 4.89464 15.5196 4.70711 15.7071C4.51957 15.8946 4.26522 16 4 16H1C0.734784 16 0.48043 15.8946 0.292893 15.7071C0.105357 15.5196 0 15.2652 0 15C0 14.7348 0.105357 14.4804 0.292893 14.2929C0.48043 14.1054 0.734784 14 1 14V2ZM4 3H6V5H4V3ZM6 7H4V9H6V7ZM8 3H10V5H8V3ZM10 7H8V9H10V7Z"
                            fill="#90A4AE"
                          />
                        </svg>
                      </ListItemPrefix>
                      Hexa Developers
                    </ListItem>
                  </a>
                  <a
                    href="#"
                    className="text-initial font-medium text-blue-gray-500"
                  >
                    <ListItem>
                      <ListItemPrefix className="mr-2">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0 1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0H3.153C3.38971 0.000108969 3.6187 0.0841807 3.79924 0.23726C3.97979 0.390339 4.10018 0.602499 4.139 0.836L4.879 5.271C4.91436 5.48222 4.88097 5.69921 4.78376 5.89003C4.68655 6.08085 4.53065 6.23543 4.339 6.331L2.791 7.104C3.34611 8.47965 4.17283 9.72928 5.22178 10.7782C6.27072 11.8272 7.52035 12.6539 8.896 13.209L9.67 11.661C9.76552 11.4695 9.91994 11.3138 10.1106 11.2166C10.3012 11.1194 10.5179 11.0859 10.729 11.121L15.164 11.861C15.3975 11.8998 15.6097 12.0202 15.7627 12.2008C15.9158 12.3813 15.9999 12.6103 16 12.847V15C16 15.2652 15.8946 15.5196 15.7071 15.7071C15.5196 15.8946 15.2652 16 15 16H13C5.82 16 0 10.18 0 3V1Z"
                            fill="#90A4AE"
                          />
                        </svg>
                      </ListItemPrefix>
                      00 123 456 789
                    </ListItem>
                  </a>
                  <a
                    href="#"
                    className="text-initial font-medium text-blue-gray-500"
                  >
                    <ListItem>
                      <ListItemPrefix className="mr-2">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.00299 5.884L9.99999 9.882L17.997 5.884C17.9674 5.37444 17.7441 4.89549 17.3728 4.54523C17.0015 4.19497 16.5104 3.99991 16 4H3.99999C3.48958 3.99991 2.99844 4.19497 2.62717 4.54523C2.2559 4.89549 2.03259 5.37444 2.00299 5.884Z"
                            fill="#90A4AE"
                          />
                          <path
                            d="M18 8.11798L10 12.118L2 8.11798V14C2 14.5304 2.21071 15.0391 2.58579 15.4142C2.96086 15.7893 3.46957 16 4 16H16C16.5304 16 17.0391 15.7893 17.4142 15.4142C17.7893 15.0391 18 14.5304 18 14V8.11798Z"
                            fill="#90A4AE"
                          />
                        </svg>
                      </ListItemPrefix>
                      person@example.com
                    </ListItem>
                  </a>
                </List>
              </PopoverContent>
            </Popover>
          </CardBody>
        </Card>

        {/* Shahareyar Rafi */}
        <Card
          shadow={false}
          className="relative grid h-96 w-full max-w-[28rem] items-end justify-center overflow-hidden text-center"
        >
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="absolute inset-0 m-0 h-full w-full object-cover rounded-none bg-[url('https://i.postimg.cc/MTy0xy3H/bookshelf-arranged-in-rainbow-pattern-jpg-optimal.jpg')] bg-cover bg-center"
          >
            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
          </CardHeader>
          <CardBody className="relative py-14 px-6 md:px-12">
            <Typography
              variant="h5"
              color="white"
              className="mb-6 font-medium leading-[1.5]"
            >
              We dream of a world where Boi Binimoy becomes the go-to platform
              for book lovers to discover, exchange, and cherish stories
            </Typography>
            <Typography variant="h5" className="mb-4 text-gray-400">
              Shahareyar Rafi
            </Typography>

            <Popover placement="bottom-end">
              <PopoverHandler>
                <Avatar
                  size="xl"
                  variant="circular"
                  alt="Shahareyar Rafi"
                  className="border-2 border-white rounded-full w-16"
                  src="https://docs.material-tailwind.com/img/team-4.jpg"
                />
              </PopoverHandler>
              <PopoverContent className="w-72">
                <div className="mb-4 flex items-center gap-4 border-b border-blue-gray-50 pb-4">
                  <Avatar
                    src="https://docs.material-tailwind.com/img/team-4.jpg"
                    alt="Shahareyar Rafi"
                    className="rounded-full w-16 m-2"
                  />
                  <div>
                    <Typography variant="h6" color="blue-gray">
                      Shahareyar Rafi
                    </Typography>
                    <Typography
                      variant="small"
                      color="gray"
                      className="font-medium text-blue-gray-500"
                    >
                      General Manager
                    </Typography>
                  </div>
                </div>
                <List className="p-0">
                  <a
                    href="#"
                    className="text-initial font-medium text-blue-gray-500"
                  >
                    <ListItem>
                      <ListItemPrefix className="mr-2">
                        <svg
                          width="14"
                          height="16"
                          viewBox="0 0 14 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M1 2C1 1.46957 1.21071 0.960859 1.58579 0.585786C1.96086 0.210714 2.46957 0 3 0H11C11.5304 0 12.0391 0.210714 12.4142 0.585786C12.7893 0.960859 13 1.46957 13 2V14C13.2652 14 13.5196 14.1054 13.7071 14.2929C13.8946 14.4804 14 14.7348 14 15C14 15.2652 13.8946 15.5196 13.7071 15.7071C13.5196 15.8946 13.2652 16 13 16H10C9.73478 16 9.48043 15.8946 9.29289 15.7071C9.10536 15.5196 9 15.2652 9 15V13C9 12.7348 8.89464 12.4804 8.70711 12.2929C8.51957 12.1054 8.26522 12 8 12H6C5.73478 12 5.48043 12.1054 5.29289 12.2929C5.10536 12.4804 5 12.7348 5 13V15C5 15.2652 4.89464 15.5196 4.70711 15.7071C4.51957 15.8946 4.26522 16 4 16H1C0.734784 16 0.48043 15.8946 0.292893 15.7071C0.105357 15.5196 0 15.2652 0 15C0 14.7348 0.105357 14.4804 0.292893 14.2929C0.48043 14.1054 0.734784 14 1 14V2ZM4 3H6V5H4V3ZM6 7H4V9H6V7ZM8 3H10V5H8V3ZM10 7H8V9H10V7Z"
                            fill="#90A4AE"
                          />
                        </svg>
                      </ListItemPrefix>
                      Hexa Developers
                    </ListItem>
                  </a>
                  <a
                    href="#"
                    className="text-initial font-medium text-blue-gray-500"
                  >
                    <ListItem>
                      <ListItemPrefix className="mr-2">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0 1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0H3.153C3.38971 0.000108969 3.6187 0.0841807 3.79924 0.23726C3.97979 0.390339 4.10018 0.602499 4.139 0.836L4.879 5.271C4.91436 5.48222 4.88097 5.69921 4.78376 5.89003C4.68655 6.08085 4.53065 6.23543 4.339 6.331L2.791 7.104C3.34611 8.47965 4.17283 9.72928 5.22178 10.7782C6.27072 11.8272 7.52035 12.6539 8.896 13.209L9.67 11.661C9.76552 11.4695 9.91994 11.3138 10.1106 11.2166C10.3012 11.1194 10.5179 11.0859 10.729 11.121L15.164 11.861C15.3975 11.8998 15.6097 12.0202 15.7627 12.2008C15.9158 12.3813 15.9999 12.6103 16 12.847V15C16 15.2652 15.8946 15.5196 15.7071 15.7071C15.5196 15.8946 15.2652 16 15 16H13C5.82 16 0 10.18 0 3V1Z"
                            fill="#90A4AE"
                          />
                        </svg>
                      </ListItemPrefix>
                      00 123 456 789
                    </ListItem>
                  </a>
                  <a
                    href="#"
                    className="text-initial font-medium text-blue-gray-500"
                  >
                    <ListItem>
                      <ListItemPrefix className="mr-2">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.00299 5.884L9.99999 9.882L17.997 5.884C17.9674 5.37444 17.7441 4.89549 17.3728 4.54523C17.0015 4.19497 16.5104 3.99991 16 4H3.99999C3.48958 3.99991 2.99844 4.19497 2.62717 4.54523C2.2559 4.89549 2.03259 5.37444 2.00299 5.884Z"
                            fill="#90A4AE"
                          />
                          <path
                            d="M18 8.11798L10 12.118L2 8.11798V14C2 14.5304 2.21071 15.0391 2.58579 15.4142C2.96086 15.7893 3.46957 16 4 16H16C16.5304 16 17.0391 15.7893 17.4142 15.4142C17.7893 15.0391 18 14.5304 18 14V8.11798Z"
                            fill="#90A4AE"
                          />
                        </svg>
                      </ListItemPrefix>
                      person@example.com
                    </ListItem>
                  </a>
                </List>
              </PopoverContent>
            </Popover>
          </CardBody>
        </Card>

        {/* Taiatul Islam */}
        <Card
          shadow={false}
          className="relative grid h-96 w-full max-w-[28rem] items-end justify-center overflow-hidden text-center"
        >
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="absolute inset-0 m-0 h-full w-full object-cover rounded-none bg-[url('https://i.postimg.cc/MTy0xy3H/bookshelf-arranged-in-rainbow-pattern-jpg-optimal.jpg')] bg-cover bg-center"
          >
            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
          </CardHeader>
          <CardBody className="relative py-14 px-6 md:px-12">
            <Typography
              variant="h5"
              color="white"
              className="mb-6 font-medium leading-[1.5]"
            >
              From dusty attics to vibrant online shelves, this journey has
              been a roller coaster of emotions, but seeing book lovers connect
              makes
            </Typography>
            <Typography variant="h5" className="mb-4 text-gray-400">
              Taiatul Islam
            </Typography>

            <Popover placement="bottom-end">
              <PopoverHandler>
                <Avatar
                  size="xl"
                  variant="circular"
                  alt="Taiatul Islam"
                  className="border-2 border-white rounded-full w-16"
                  src="https://docs.material-tailwind.com/img/team-4.jpg"
                />
              </PopoverHandler>
              <PopoverContent className="w-72">
                <div className="mb-4 flex items-center gap-4 border-b border-blue-gray-50 pb-4">
                  <Avatar
                    src="https://docs.material-tailwind.com/img/team-4.jpg"
                    alt="Taiatul Islam"
                    className="rounded-full w-16 m-2"
                  />
                  <div>
                    <Typography variant="h6" color="blue-gray">
                      Taiatul Islam
                    </Typography>
                    <Typography
                      variant="small"
                      color="gray"
                      className="font-medium text-blue-gray-500"
                    >
                      General Manager
                    </Typography>
                  </div>
                </div>
                <List className="p-0">
                  <a
                    href="#"
                    className="text-initial font-medium text-blue-gray-500"
                  >
                    <ListItem>
                      <ListItemPrefix className="mr-2">
                        <svg
                          width="14"
                          height="16"
                          viewBox="0 0 14 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M1 2C1 1.46957 1.21071 0.960859 1.58579 0.585786C1.96086 0.210714 2.46957 0 3 0H11C11.5304 0 12.0391 0.210714 12.4142 0.585786C12.7893 0.960859 13 1.46957 13 2V14C13.2652 14 13.5196 14.1054 13.7071 14.2929C13.8946 14.4804 14 14.7348 14 15C14 15.2652 13.8946 15.5196 13.7071 15.7071C13.5196 15.8946 13.2652 16 13 16H10C9.73478 16 9.48043 15.8946 9.29289 15.7071C9.10536 15.5196 9 15.2652 9 15V13C9 12.7348 8.89464 12.4804 8.70711 12.2929C8.51957 12.1054 8.26522 12 8 12H6C5.73478 12 5.48043 12.1054 5.29289 12.2929C5.10536 12.4804 5 12.7348 5 13V15C5 15.2652 4.89464 15.5196 4.70711 15.7071C4.51957 15.8946 4.26522 16 4 16H1C0.734784 16 0.48043 15.8946 0.292893 15.7071C0.105357 15.5196 0 15.2652 0 15C0 14.7348 0.105357 14.4804 0.292893 14.2929C0.48043 14.1054 0.734784 14 1 14V2ZM4 3H6V5H4V3ZM6 7H4V9H6V7ZM8 3H10V5H8V3ZM10 7H8V9H10V7Z"
                            fill="#90A4AE"
                          />
                        </svg>
                      </ListItemPrefix>
                      Hexa Developers
                    </ListItem>
                  </a>
                  <a
                    href="#"
                    className="text-initial font-medium text-blue-gray-500"
                  >
                    <ListItem>
                      <ListItemPrefix className="mr-2">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0 1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0H3.153C3.38971 0.000108969 3.6187 0.0841807 3.79924 0.23726C3.97979 0.390339 4.10018 0.602499 4.139 0.836L4.879 5.271C4.91436 5.48222 4.88097 5.69921 4.78376 5.89003C4.68655 6.08085 4.53065 6.23543 4.339 6.331L2.791 7.104C3.34611 8.47965 4.17283 9.72928 5.22178 10.7782C6.27072 11.8272 7.52035 12.6539 8.896 13.209L9.67 11.661C9.76552 11.4695 9.91994 11.3138 10.1106 11.2166C10.3012 11.1194 10.5179 11.0859 10.729 11.121L15.164 11.861C15.3975 11.8998 15.6097 12.0202 15.7627 12.2008C15.9158 12.3813 15.9999 12.6103 16 12.847V15C16 15.2652 15.8946 15.5196 15.7071 15.7071C15.5196 15.8946 15.2652 16 15 16H13C5.82 16 0 10.18 0 3V1Z"
                            fill="#90A4AE"
                          />
                        </svg>
                      </ListItemPrefix>
                      00 123 456 789
                    </ListItem>
                  </a>
                  <a
                    href="#"
                    className="text-initial font-medium text-blue-gray-500"
                  >
                    <ListItem>
                      <ListItemPrefix className="mr-2">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.00299 5.884L9.99999 9.882L17.997 5.884C17.9674 5.37444 17.7441 4.89549 17.3728 4.54523C17.0015 4.19497 16.5104 3.99991 16 4H3.99999C3.48958 3.99991 2.99844 4.19497 2.62717 4.54523C2.2559 4.89549 2.03259 5.37444 2.00299 5.884Z"
                            fill="#90A4AE"
                          />
                          <path
                            d="M18 8.11798L10 12.118L2 8.11798V14C2 14.5304 2.21071 15.0391 2.58579 15.4142C2.96086 15.7893 3.46957 16 4 16H16C16.5304 16 17.0391 15.7893 17.4142 15.4142C17.7893 15.0391 18 14.5304 18 14V8.11798Z"
                            fill="#90A4AE"
                          />
                        </svg>
                      </ListItemPrefix>
                      person@example.com
                    </ListItem>
                  </a>
                </List>
              </PopoverContent>
            </Popover>
          </CardBody>
        </Card>

        {/* Muahmmad Minhajul Alam */}
        <Card
          shadow={false}
          className="relative grid h-96 w-full max-w-[28rem] items-end justify-center overflow-hidden text-center"
        >
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="absolute inset-0 m-0 h-full w-full object-cover rounded-none bg-[url('https://i.postimg.cc/MTy0xy3H/bookshelf-arranged-in-rainbow-pattern-jpg-optimal.jpg')] bg-cover bg-center"
          >
            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
          </CardHeader>
          <CardBody className="relative py-14 px-6 md:px-12">
            <Typography
              variant="h5"
              color="white"
              className="mb-6 font-medium leading-[1.5]"
            >
              We started Boi Binimoy because we saw a world where reading
              shouldn&apos;t be limited by financial means or geographical borders.
            </Typography>
            <Typography variant="h5" className="mb-4 text-gray-400">
              Muahmmad Minhajul Alam
            </Typography>

            <Popover placement="bottom-end">
              <PopoverHandler>
                <Avatar
                  size="xl"
                  variant="circular"
                  alt="Muahmmad Minhajul Alam"
                  className="border-2 border-white rounded-full w-16"
                  src="https://docs.material-tailwind.com/img/team-4.jpg"
                />
              </PopoverHandler>
              <PopoverContent className="w-72">
                <div className="mb-4 flex items-center gap-4 border-b border-blue-gray-50 pb-4">
                  <Avatar
                    src="https://docs.material-tailwind.com/img/team-4.jpg"
                    alt="Muahmmad Minhajul Alam"
                    className="rounded-full w-16 m-2"
                  />
                  <div>
                    <Typography variant="h6" color="blue-gray">
                      Muahmmad Minhajul Alam
                    </Typography>
                    <Typography
                      variant="small"
                      color="gray"
                      className="font-medium text-blue-gray-500"
                    >
                      General Manager
                    </Typography>
                  </div>
                </div>
                <List className="p-0">
                  <a
                    href="#"
                    className="text-initial font-medium text-blue-gray-500"
                  >
                    <ListItem>
                      <ListItemPrefix className="mr-2">
                        <svg
                          width="14"
                          height="16"
                          viewBox="0 0 14 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M1 2C1 1.46957 1.21071 0.960859 1.58579 0.585786C1.96086 0.210714 2.46957 0 3 0H11C11.5304 0 12.0391 0.210714 12.4142 0.585786C12.7893 0.960859 13 1.46957 13 2V14C13.2652 14 13.5196 14.1054 13.7071 14.2929C13.8946 14.4804 14 14.7348 14 15C14 15.2652 13.8946 15.5196 13.7071 15.7071C13.5196 15.8946 13.2652 16 13 16H10C9.73478 16 9.48043 15.8946 9.29289 15.7071C9.10536 15.5196 9 15.2652 9 15V13C9 12.7348 8.89464 12.4804 8.70711 12.2929C8.51957 12.1054 8.26522 12 8 12H6C5.73478 12 5.48043 12.1054 5.29289 12.2929C5.10536 12.4804 5 12.7348 5 13V15C5 15.2652 4.89464 15.5196 4.70711 15.7071C4.51957 15.8946 4.26522 16 4 16H1C0.734784 16 0.48043 15.8946 0.292893 15.7071C0.105357 15.5196 0 15.2652 0 15C0 14.7348 0.105357 14.4804 0.292893 14.2929C0.48043 14.1054 0.734784 14 1 14V2ZM4 3H6V5H4V3ZM6 7H4V9H6V7ZM8 3H10V5H8V3ZM10 7H8V9H10V7Z"
                            fill="#90A4AE"
                          />
                        </svg>
                      </ListItemPrefix>
                      Hexa Developers
                    </ListItem>
                  </a>
                  <a
                    href="#"
                    className="text-initial font-medium text-blue-gray-500"
                  >
                    <ListItem>
                      <ListItemPrefix className="mr-2">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0 1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0H3.153C3.38971 0.000108969 3.6187 0.0841807 3.79924 0.23726C3.97979 0.390339 4.10018 0.602499 4.139 0.836L4.879 5.271C4.91436 5.48222 4.88097 5.69921 4.78376 5.89003C4.68655 6.08085 4.53065 6.23543 4.339 6.331L2.791 7.104C3.34611 8.47965 4.17283 9.72928 5.22178 10.7782C6.27072 11.8272 7.52035 12.6539 8.896 13.209L9.67 11.661C9.76552 11.4695 9.91994 11.3138 10.1106 11.2166C10.3012 11.1194 10.5179 11.0859 10.729 11.121L15.164 11.861C15.3975 11.8998 15.6097 12.0202 15.7627 12.2008C15.9158 12.3813 15.9999 12.6103 16 12.847V15C16 15.2652 15.8946 15.5196 15.7071 15.7071C15.5196 15.8946 15.2652 16 15 16H13C5.82 16 0 10.18 0 3V1Z"
                            fill="#90A4AE"
                          />
                        </svg>
                      </ListItemPrefix>
                      00 123 456 789
                    </ListItem>
                  </a>
                  <a
                    href="#"
                    className="text-initial font-medium text-blue-gray-500"
                  >
                    <ListItem>
                      <ListItemPrefix className="mr-2">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.00299 5.884L9.99999 9.882L17.997 5.884C17.9674 5.37444 17.7441 4.89549 17.3728 4.54523C17.0015 4.19497 16.5104 3.99991 16 4H3.99999C3.48958 3.99991 2.99844 4.19497 2.62717 4.54523C2.2559 4.89549 2.03259 5.37444 2.00299 5.884Z"
                            fill="#90A4AE"
                          />
                          <path
                            d="M18 8.11798L10 12.118L2 8.11798V14C2 14.5304 2.21071 15.0391 2.58579 15.4142C2.96086 15.7893 3.46957 16 4 16H16C16.5304 16 17.0391 15.7893 17.4142 15.4142C17.7893 15.0391 18 14.5304 18 14V8.11798Z"
                            fill="#90A4AE"
                          />
                        </svg>
                      </ListItemPrefix>
                      person@example.com
                    </ListItem>
                  </a>
                </List>
              </PopoverContent>
            </Popover>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default FoundersQuotes;
