####### basic text  #############
#
#
# import qrcode
# img =qrcode.make("senin amk")
# img.save("myqr.png")

######### you can upload url ########################

# import qrcode
#
# qr = qrcode.QRCode(
# 	version=1,
# 	error_correction=qrcode.constants.ERROR_CORRECT_L,
# 	box_size=15,
# 	border=5
# )
#
# data = ' https ....' ## copy your url here
# qr.add_data(data)
# qr.make(fit=True)
# img = qr.make_image(fill='black', back_color='white')
# img.save('image1.png') # write image name in here

## to open in explorer
# do it open in explorer with right click.


# import qrcode
# import qrcode.image.svg
# factory = qrcode.image.svg.SvgPathImage
# svg_image = qrcode.make("hello world baybe ",image_factory = factory)
# svg_image.save("myqrcode.svg")


#### with gui ##########
# from tkinter import *
# import pyqrcode
# import qrcode
# import png
# from PIL import ImageTk , Image
# root=Tk()
#
# def generate():
#
#     link_name=name_entry.get()
#     link=link_entry.get()
#     file_name=link_name +".png"
#     url=pyqrcode.create(link)
#     url.png(file_name,scale=5)
#     image=ImageTk.PhotoImage(Image.open(file_name))
#     image_label=Label(image=image)
#     image_label.image=image
#     canvas.create_window(200,400,window=image_label)
#
#
#
#
# canvas=Canvas(root,width=400,height=600)
# canvas.pack()
# app_label=Label(root,text="QR Code Generator",font=("Arial",20))
# canvas.create_window(200,50,window=app_label)
# name_label=Label(root,text='Link Name')
# link_label=Label(root,text="Link")
# canvas.create_window(200,100,window=name_label)
# canvas.create_window(200,160,window=link_label)
# name_entry=Entry(root)
# link_entry=Entry(root)
# canvas.create_window(200,130,window=name_entry)
# canvas.create_window(200,180,window=link_entry)
# button=Button(text="Generate QR Code",command=generate)
# canvas.create_window(200,220,window=button)
#
#
# root.mainloop()

# Import Required Library
from tkinter import *
from tkinter import ttk
from random import *

# Create Object
root = Tk()

# Set geometry
root.geometry("500x500")

root.title("Rock-Paper-Scissors-Game")

# List of players
list = ["rock","paper","scissors"]

choose_number = randint(0,2)
print(choose_number) # For testing if it works

label = Label(root,text="Computer ",width = 20,height=4,font=("algerian",15))
label.pack()

def spin():
    choose_number = randint(0,2)
    label.config(text=list[choose_number])
    if user_select.get() == "Rock":
        user_select_value = 0
        print(user_select_value)
    elif user_select.get() == "Paper":
        user_select_value = 1
        print(user_select_value)
    elif user_select.get() == "Scissors":
        user_select_value = 2
        print(user_select_value)

    if user_select_value == 0:
        if choose_number == 0:
            wl_label.config(text="Tie! - "+" Computer:Bad luck")
        elif choose_number == 1:
            wl_label.config(text="YOU Loose - "+" Computer: I am better ")
        elif choose_number == 2 :
            wl_label.config(text="YOU Won - "+" Computer: You won by luck")

    elif user_select_value == 1:
        if choose_number == 1:
            wl_label.config(text="Tie! - "+" Computer: Nice game")
        elif choose_number == 0:
            wl_label.config(text="YOU Won - "+" Computer: Shit how you are better")
        elif choose_number == 2 :
            wl_label.config(text="YOU Loose - "+" Computer: booo")

    elif user_select_value == 2:
        if choose_number == 2:
            wl_label.config(text="Tie!")
        elif choose_number == 0:
            wl_label.config(text="YOU Loose - "+" Computer: I am playing this game since i was born")
        elif choose_number == 1 :
            wl_label.config(text="YOU Won")



# Adding dropdown box for Rock,Paper,Scissors
user_select = ttk.Combobox(root,value=["Rock","Paper","Scissors"])
user_select.current(0)
user_select.pack()

# Add Labels,Button
wl_label = Label(root,text="",font=("arial",10),width=50,height=4)
wl_label.pack()

button = Button(root,text="Spin!",font=("bell mt",10),command=spin)
button.pack()

root.mainloop()