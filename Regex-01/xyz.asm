%include "doCall.asm"
mov arg0, 0
mov arg1, string_r
ffcall fdopen
mov[stdin], rax
mov arg0, 1
mov arg1, string_w
ffcall fdopen
mov[stdout], rax
default rel
section .text
global main
main:
push qword lbl0
pop arg1
mov arg0, string_percent_s
ffvcall printf,0
mov arg0, 0
ffcall fflush
push qword lbl1
pop arg1
mov arg0, string_percent_s
ffvcall printf,0
mov arg0, 0
ffcall fflush
push qword lbl2
pop arg1
mov arg0, string_percent_s
ffvcall printf,0
mov arg0, 0
ffcall fflush
push qword lbl3
pop arg1
mov arg0, string_percent_s
ffvcall printf,0
mov arg0, 0
ffcall fflush
push qword 124
pop rax
ret
ret
section .data
stdin: dq 0
stdout: dq 0
string_r: db 'r', 0
string_w: db 'w', 0
string_a: db 'a', 0
string_rplus: db 'r+', 0
string_percent_s: db '%s', 0
string_percent_d: db '%d', 0
fgets_buffer: times 64 db 0
lbl0:
db 72
db 0
lbl1:
db 101
db 108
db 108
db 0
lbl2:
db 111
db 10
db 119
db 0
lbl3:
db 111
db 114
db 108
db 100
db 33
db 0