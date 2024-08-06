FROM node:lts-iron
 
WORKDIR /olayinka_oke_ui_garden/
 
COPY public/ /olayinka_oke_ui_garden/public
COPY src/ /olayinka_oke_ui_garden/src
COPY package.json /olayinka_oke_ui_garden/
COPY . /olayinka_oke_ui_garden
 
RUN npm install
 
CMD ["npm", "run", "storybook"]