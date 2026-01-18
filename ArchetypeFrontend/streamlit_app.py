import streamlit as st
import streamlit.components.v1 as stc
import os

st.set_page_config(
    page_title="Archetypes.You",
    page_icon="★",
    layout="wide",
    initial_sidebar_state="collapsed"
)

def load_text(fname):
    base_dir = os.path.dirname(os.path.abspath(__file__))
    file_path = os.path.join(base_dir, fname)
    with open(file_path, 'r', encoding='utf-8') as f:
        return f.read()

def build_view(target_html):
    raw_html = load_text(target_html)
    raw_css = load_text("style.css")
    raw_js = load_text("script.js")

    mod_html = raw_html.replace('<link rel="stylesheet" href="style.css">', f"<style>{raw_css}</style>")
    
    mod_html = mod_html.replace('<script src="script.js"></script>', "")
    mod_html += f"<script>{raw_js}</script>"
    
    stc.html(mod_html, height=1200, scrolling=True)

qp = st.query_params
current_view = qp.get("page", "home")

st.sidebar.title("Navigation")
nav_choice = st.sidebar.radio("Go to", ["Home", "Archetypes", "Research"])

if nav_choice == "Home":
    build_view("index.html")
elif nav_choice == "Archetypes":
    build_view("archetypes.html")
elif nav_choice == "Research":
    build_view("research.html")
