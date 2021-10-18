import streamlit as st
from PIL import Image
import requests
import base64
import os

def get_binary_file_downloader_html(bin_file, file_label='File'):
    with open(bin_file, 'rb') as f:
        data = f.read()
    bin_str = base64.b64encode(data).decode()
    href = f'<a href="data:application/octet-stream;base64,{bin_str}" download="{os.path.basename(bin_file)}">[ Download Image ]</a>'
    return href


def toonify_image():
    image_file = st.file_uploader("Upload Image", type = ['jpg','png','jpeg'])

    if image_file is None:
        st.warning("Please Upload an Image")

    if image_file is not None:
        image1 = Image.open(image_file)
        rgb_im = image1.convert('RGB')
        image = rgb_im.save("saved_image.jpg")
        image_path = "saved_image.jpg"
        st.image(image1,width = 400)

    if st.sidebar.button("Toonify 🎃 "):
        if image_file is not None:
            st.warning("Please wait.. by the way Nice picture..😊")
            r = requests.post(
                "https://api.deepai.org/api/toonify",
                files={
                    'image': open('saved_image.jpg', 'rb'),
                },
                headers={'api-key': '8f0499fe-bf0f-455d-9f4b-3acb442b49c4'}
            )

            color_image_url = r.json()["output_url"]

            img_data = requests.get(color_image_url).content
            with open('toonified_image.jpg', 'wb') as handler:
                handler.write(img_data)
            st.success("That looks good..🎊✨")
            toonified_image = Image.open('toonified_image.jpg')

            st.subheader("Toonified Image")
            st.image(toonified_image)

            st.markdown(get_binary_file_downloader_html('toonified_image.jpg', 'Picture'), unsafe_allow_html=True)

        else:
            st.error("Please Upload Image!!!")
