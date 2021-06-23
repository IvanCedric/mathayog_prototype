from django.db import models

# Create your models here.
class Question(models.Model):
    question_text = models.CharField(max_length=200)
    pub_date = models.DateTimeField('date published')

    def __str__(self):
        return self.question_text


class Choice(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    choice_text = models.CharField(max_length=200)
    votes = models.IntegerField(default=0)

    def __str__(self):
        return self.choice_text
class answerField(models.Model):
    id = models.BigAutoField(primary_key=True)

    #af_1 and af_2 sail/boat
    af_1 = models.CharField(max_length=30)
    af_2 = models.CharField(max_length=30)

    #af_3,af_4,af_5 represent shaded bars
    af_3 = models.BinaryField()
    af_4 = models.BinaryField()
    af_5 = models.BinaryField()

    #af_6,af_7,af_8 represent percentage drag
    af_6 = models.CharField(max_length=30)
    af_7 = models.CharField(max_length=30)
    af_8 = models.CharField(max_length=30)

    def __str__(self):
            return self.id