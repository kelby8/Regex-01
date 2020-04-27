default rel
section .text
global main
main:
mov rax, 1
cmp rax, 0
je lbl0
mov rax, 0
cmp rax, 0
je lbl1
mov rax, 1
ret
lbl1:
lbl0:
ret
section .data