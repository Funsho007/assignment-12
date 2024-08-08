FROM node:lts-iron
WORKDIR /oke_olayinka_ui_garden_build_checks/
COPY public/ /oke_olayinka_ui_garden_build_checks/public
COPY src/ /oke_olayinka_ui_garden_build_checks/src
COPY package.json /oke_olayinka_ui_garden_build_checks/
COPY . /oke_olayinka_ui_garden_build_checks
RUN npm install
CMD ["npm", "run", "storybook"]